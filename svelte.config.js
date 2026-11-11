import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html'
		}),
		prerender: {
			// The retired pages have no inbound links, so the crawler never reaches their English URLs.
			entries: ['*', '/en/services/', '/en/case-study/afida/'],
			handleHttpError: 'warn',
			handleMissingId: 'warn'
		}
	}
};

export default config;
