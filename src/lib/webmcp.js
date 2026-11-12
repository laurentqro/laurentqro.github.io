import { goto } from '$app/navigation';
import { localizeHref } from '$lib/href';
import { EMAIL, WHATSAPP_URL, LINKEDIN_URL } from '$lib/contact';

const PAGES = {
	home: '/',
	about: '/about',
	faq: '/faq',
	portfolio: '/portfolio',
	privacy: '/privacy',
	terms: '/terms'
};

// WebMCP (https://webmachinelearning.github.io/webmcp/) is a draft. Older Chrome builds
// expose it on navigator and not on document, so both are tried. Most browsers have neither.
export function registerWebMcpTools() {
	const modelContext = document.modelContext ?? navigator.modelContext;
	if (!modelContext?.registerTool) return;

	const controller = new AbortController();
	const options = { signal: controller.signal };

	const tools = [
		{
			name: 'get_contact_details',
			description:
				'Get the ways to contact Laurent Curau, an independent software engineer in Monaco: email, WhatsApp and LinkedIn.',
			inputSchema: { type: 'object', properties: {} },
			annotations: { readOnlyHint: true },
			execute: async () => ({ email: EMAIL, whatsapp: WHATSAPP_URL, linkedin: LINKEDIN_URL })
		},
		{
			name: 'open_page',
			description:
				'Open a page of laurentcurau.com in the current language: home (the AI integration service), about, faq (cost, data, security), portfolio, privacy or terms.',
			inputSchema: {
				type: 'object',
				properties: {
					page: { type: 'string', enum: Object.keys(PAGES), description: 'The page to open.' }
				},
				required: ['page']
			},
			execute: async ({ page }) => {
				if (!Object.hasOwn(PAGES, page)) throw new Error(`Unknown page: ${page}`);
				const href = localizeHref(PAGES[page]);
				await goto(href);
				return { opened: href };
			}
		}
	];

	for (const tool of tools) {
		Promise.resolve(modelContext.registerTool(tool, options)).catch(() => {});
	}

	return () => controller.abort();
}
