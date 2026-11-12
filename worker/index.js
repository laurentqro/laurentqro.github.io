import card from '../static/.well-known/mcp/server-card.json';
import { EMAIL, WHATSAPP_URL, LINKEDIN_URL } from '../src/lib/contact.js';

const PROTOCOL_VERSIONS = ['2025-11-25', '2025-06-18', '2025-03-26'];

const CORS = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'POST, OPTIONS',
	'Access-Control-Allow-Headers': 'Content-Type, Accept, Mcp-Protocol-Version, Mcp-Session-Id'
};

const TOOLS = [
	{
		name: 'list_pages',
		title: 'List the pages',
		description:
			'List the pages of laurentcurau.com with their path, language, title and description. The site is in French (default) and in English (paths under /en/).',
		inputSchema: {
			type: 'object',
			properties: {
				lang: { type: 'string', enum: ['fr', 'en'], description: 'Keep only this language.' }
			}
		},
		annotations: { readOnlyHint: true }
	},
	{
		name: 'read_page',
		title: 'Read a page',
		description:
			'Read one page of laurentcurau.com as Markdown. Use a path from list_pages, for example /en/faq/ for cost, data protection and cybersecurity.',
		inputSchema: {
			type: 'object',
			properties: {
				path: { type: 'string', description: 'The page path, for example /en/about/.' }
			},
			required: ['path']
		},
		annotations: { readOnlyHint: true }
	},
	{
		name: 'get_contact',
		title: 'Get the contact details',
		description: 'Get the ways to contact Laurent Curau: email, WhatsApp and LinkedIn.',
		inputSchema: { type: 'object', properties: {} },
		annotations: { readOnlyHint: true }
	}
];

const asset = (env, request, path) => env.ASSETS.fetch(new URL(path, request.url));

async function sitePages(env, request) {
	const response = await asset(env, request, '/pages.json');
	if (!response.ok) throw new Error('The page list is not available.');
	return response.json();
}

const text = (value) => ({ content: [{ type: 'text', text: value }] });
const failure = (message) => ({ ...text(message), isError: true });

async function callTool(name, args, env, request) {
	if (name === 'list_pages') {
		const pages = await sitePages(env, request);
		const wanted = args.lang ? pages.filter((page) => page.lang === args.lang) : pages;
		return text(
			JSON.stringify(
				wanted.map(({ path, lang, title, description, url }) => ({
					path,
					lang,
					title,
					description,
					url
				})),
				null,
				2
			)
		);
	}
	if (name === 'read_page') {
		const pages = await sitePages(env, request);
		const page = pages.find((candidate) => candidate.path === args.path);
		if (!page) return failure(`No page at ${args.path}. Call list_pages for the valid paths.`);
		const response = await asset(env, request, page.markdown);
		if (!response.ok) return failure(`The page ${page.path} is not available as Markdown.`);
		return text(await response.text());
	}
	if (name === 'get_contact') {
		return text(
			[
				'Laurent Curau, independent software engineer in Monaco.',
				`Email: ${EMAIL}`,
				`WhatsApp: ${WHATSAPP_URL}`,
				`LinkedIn: ${LINKEDIN_URL}`
			].join('\n')
		);
	}
	return null;
}

const rpcResult = (id, result) => ({ jsonrpc: '2.0', id, result });
const rpcError = (id, code, message) => ({ jsonrpc: '2.0', id, error: { code, message } });

async function answer(message, env, request) {
	const { id, method, params = {} } = message;
	if (method === 'initialize') {
		const wanted = params.protocolVersion;
		return rpcResult(id, {
			protocolVersion: PROTOCOL_VERSIONS.includes(wanted) ? wanted : PROTOCOL_VERSIONS[0],
			capabilities: { tools: {} },
			serverInfo: card.serverInfo,
			instructions: card.description
		});
	}
	if (method === 'ping') return rpcResult(id, {});
	if (method === 'tools/list') return rpcResult(id, { tools: TOOLS });
	if (method === 'tools/call') {
		const result = await callTool(params.name, params.arguments ?? {}, env, request);
		return result ? rpcResult(id, result) : rpcError(id, -32602, `Unknown tool: ${params.name}`);
	}
	return rpcError(id, -32601, `Method not found: ${method}`);
}

const json = (body, status = 200) =>
	new Response(JSON.stringify(body), {
		status,
		headers: { 'Content-Type': 'application/json', ...CORS }
	});

// A stateless Streamable HTTP server: each POST carries one JSON-RPC message and gets
// one JSON answer. No session, no stream, so it needs no storage and no Durable Object.
async function mcp(request, env) {
	if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: CORS });
	if (request.method !== 'POST') {
		return new Response('This MCP endpoint accepts POST only.\n', {
			status: 405,
			headers: { Allow: 'POST, OPTIONS', ...CORS }
		});
	}

	let message;
	try {
		message = await request.json();
	} catch {
		return json(rpcError(null, -32700, 'Parse error'), 400);
	}
	if (Array.isArray(message) || message?.jsonrpc !== '2.0') {
		return json(rpcError(null, -32600, 'Invalid request'), 400);
	}
	// Notifications and client responses carry no id or no method. They get no answer.
	if (message.id === undefined || typeof message.method !== 'string') {
		return new Response(null, { status: 202, headers: CORS });
	}

	try {
		return json(await answer(message, env, request));
	} catch {
		return json(rpcError(message.id, -32603, 'Internal error'));
	}
}

function prefersMarkdown(request) {
	const quality = { 'text/markdown': 0, 'text/html': 0 };
	for (const part of (request.headers.get('Accept') ?? '').split(',')) {
		const [type, ...params] = part.trim().toLowerCase().split(';');
		if (!(type in quality)) continue;
		const q = params.map((param) => param.trim()).find((param) => param.startsWith('q='));
		quality[type] = q ? Number(q.slice(2)) || 0 : 1;
	}
	return quality['text/markdown'] > 0 && quality['text/markdown'] >= quality['text/html'];
}

function agentHeaders(headers, url) {
	headers.append('Vary', 'Accept');
	headers.append('Link', '</.well-known/api-catalog>; rel="api-catalog"');
	headers.append('Link', '</llms.txt>; rel="describedby"; type="text/plain"');
	if (url.pathname.endsWith('/')) {
		headers.append('Link', `<${url.pathname}index.md>; rel="alternate"; type="text/markdown"`);
	}
	if (url.hostname.endsWith('.workers.dev')) headers.set('X-Robots-Tag', 'noindex');
}

async function page(request, env, url) {
	const readOnly = request.method === 'GET' || request.method === 'HEAD';

	if (readOnly && url.pathname.endsWith('/') && prefersMarkdown(request)) {
		const markdown = await asset(env, request, `${url.pathname}index.md`);
		if (markdown.ok) {
			const body = await markdown.text();
			const headers = new Headers({
				'Content-Type': 'text/markdown; charset=utf-8',
				'Cache-Control': 'public, max-age=0, must-revalidate',
				'Content-Signal': 'search=yes, ai-input=yes, ai-train=yes',
				// An estimate, as in Cloudflare's Markdown for Agents: about four characters per token.
				'X-Markdown-Tokens': String(Math.ceil(body.length / 4))
			});
			agentHeaders(headers, url);
			return new Response(request.method === 'HEAD' ? null : body, { headers });
		}
	}

	const html = await env.ASSETS.fetch(request);
	if (!html.ok) return html;
	const response = new Response(html.body, html);
	agentHeaders(response.headers, url);
	return response;
}

export default {
	async fetch(request, env) {
		const url = new URL(request.url);
		if (url.pathname === '/mcp') return mcp(request, env);
		try {
			return await page(request, env, url);
		} catch {
			return env.ASSETS.fetch(request);
		}
	}
};
