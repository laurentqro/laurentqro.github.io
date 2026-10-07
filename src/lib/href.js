import { localizeHref as paraglideLocalizeHref } from '$lib/paraglide/runtime';

// Paraglide drops the trailing slash, but the site uses trailingSlash = 'always'.
// Without the slash, every internal link goes through a 301 redirect.
export function localizeHref(href, options) {
	const path = paraglideLocalizeHref(href, options);
	return path.endsWith('/') ? path : path + '/';
}
