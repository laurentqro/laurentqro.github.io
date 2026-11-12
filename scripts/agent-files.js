// Runs after `vite build`. Adds the files that AI agents read to build/:
// a Markdown copy of each page, the page list for the MCP server, the Agent Skills index.
import { createHash } from 'node:crypto';
import { copyFile, readdir, readFile, writeFile } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';
import TurndownService from 'turndown';
import { SITE_URL } from '../src/lib/contact.js';

const BUILD = 'build';
const SKILLS = join(BUILD, '.well-known', 'agent-skills');

const turndown = new TurndownService({
	headingStyle: 'atx',
	bulletListMarker: '-',
	codeBlockStyle: 'fenced'
});
turndown.remove(['script', 'style', 'svg', 'noscript']);
turndown.remove((node) => node.getAttribute('data-markdown') === 'skip');
let pageUrl = SITE_URL;
turndown.addRule('absoluteLinks', {
	filter: (node) => node.nodeName === 'A' && node.getAttribute('href'),
	replacement: (content, node) => {
		const text = content.trim();
		return text ? `[${text}](${new URL(node.getAttribute('href'), pageUrl).href})` : '';
	}
});
turndown.addRule('imagesAsAltText', {
	filter: 'img',
	replacement: (content, node) => node.getAttribute('alt') || ''
});

async function htmlPages(dir) {
	const found = [];
	for (const item of await readdir(dir, { withFileTypes: true })) {
		const path = join(dir, item.name);
		if (item.isDirectory()) found.push(...(await htmlPages(path)));
		else if (item.name === 'index.html') found.push(path);
	}
	return found;
}

const decode = (text) =>
	text
		.replaceAll('&amp;', '&')
		.replaceAll('&quot;', '"')
		.replaceAll('&#39;', "'")
		.replaceAll('&lt;', '<')
		.replaceAll('&gt;', '>');

const first = (html, pattern) => decode(html.match(pattern)?.[1] ?? '');
const yaml = (text) => JSON.stringify(text);

const pages = [];
for (const file of await htmlPages(BUILD)) {
	const html = await readFile(file, 'utf8');
	// The retired pages are prerendered as meta-refresh redirects and have no content.
	if (/http-equiv="refresh"/i.test(html)) continue;
	const main = html.match(/<main[^>]*>([\s\S]*)<\/main>/)?.[1];
	if (!main) continue;

	const dir = relative(BUILD, join(file, '..'));
	const path = dir ? `/${dir.split(sep).join('/')}/` : '/';
	const page = {
		path,
		lang: first(html, /<html lang="([^"]+)"/),
		title: first(html, /<title>([^<]*)<\/title>/),
		description: first(html, /<meta name="description" content="([^"]*)"/),
		url: SITE_URL + path,
		markdown: `${path}index.md`
	};
	pageUrl = page.url;
	const body = turndown.turndown(main).trim();
	const frontmatter = [
		'---',
		`title: ${yaml(page.title)}`,
		`description: ${yaml(page.description)}`,
		`url: ${page.url}`,
		`lang: ${page.lang}`,
		'---'
	].join('\n');
	await writeFile(join(file, '..', 'index.md'), `${frontmatter}\n\n${body}\n`);
	pages.push(page);
}
pages.sort((a, b) => a.path.localeCompare(b.path));
await writeFile(join(BUILD, 'pages.json'), JSON.stringify(pages, null, '\t') + '\n');

const skills = [];
for (const item of await readdir(SKILLS, { withFileTypes: true })) {
	if (!item.isDirectory()) continue;
	const content = await readFile(join(SKILLS, item.name, 'SKILL.md'));
	const text = content.toString('utf8');
	skills.push({
		name: first(text, /^name: (.+)$/m),
		type: 'skill-md',
		description: first(text, /^description: (.+)$/m),
		url: `/.well-known/agent-skills/${item.name}/SKILL.md`,
		digest: `sha256:${createHash('sha256').update(content).digest('hex')}`
	});
}
await writeFile(
	join(SKILLS, 'index.json'),
	JSON.stringify(
		{ $schema: 'https://schemas.agentskills.io/discovery/0.2.0/schema.json', skills },
		null,
		'\t'
	) + '\n'
);

// The isitagentready.com scanner still reads the path that ARD v0.9 used.
await copyFile(
	join(BUILD, '.well-known', 'ard.json'),
	join(BUILD, '.well-known', 'ai-catalog.json')
);

console.log(`agent files: ${pages.length} Markdown pages, ${skills.length} skill(s)`);
