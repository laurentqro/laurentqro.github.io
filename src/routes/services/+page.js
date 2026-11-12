import { redirect } from '@sveltejs/kit';
import { localizeHref } from '$lib/href';

export const prerender = true;

// On the server, static/_redirects answers this URL with a 301 before this page is reached.
export function load() {
	redirect(308, localizeHref('/'));
}
