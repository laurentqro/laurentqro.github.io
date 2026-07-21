export const prerender = true;

const SITE_URL = 'https://laurentcurau.com';

// Every indexable page, as its path without locale prefix or trailing slash.
// Add new pages (e.g. case studies) here so they land in the sitemap.
const pages = [
	'',
	'services',
	'portfolio',
	'case-study/afida',
	'case-study/agence-de-la-gare',
	'case-study/maison-de-bacon',
	'case-study/christian-curau-architecte',
	'privacy',
	'terms'
];

const frUrl = (path) => (path ? `${SITE_URL}/${path}/` : `${SITE_URL}/`);
const enUrl = (path) => (path ? `${SITE_URL}/en/${path}/` : `${SITE_URL}/en/`);

function entry(loc, path) {
	return `  <url>
    <loc>${loc}</loc>
    <xhtml:link rel="alternate" hreflang="fr" href="${frUrl(path)}" />
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl(path)}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${frUrl(path)}" />
  </url>`;
}

export function GET() {
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages.flatMap((p) => [entry(frUrl(p), p), entry(enUrl(p), p)]).join('\n')}
</urlset>
`;
	return new Response(body, {
		headers: { 'Content-Type': 'application/xml' }
	});
}
