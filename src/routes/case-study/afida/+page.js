import { redirect } from '@sveltejs/kit';
import { localizeHref } from '$lib/href';

export const prerender = true;

// GitHub Pages has no server redirects: prerendering this writes a meta-refresh page at the old URL.
export function load() {
	redirect(308, localizeHref('/portfolio'));
}
