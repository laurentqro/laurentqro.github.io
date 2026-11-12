import * as m from '$lib/paraglide/messages';
import { WHATSAPP_URL } from '$lib/contact';

export function whatsappLink(prefillText = '') {
	return prefillText ? `${WHATSAPP_URL}?text=${encodeURIComponent(prefillText)}` : WHATSAPP_URL;
}

export function prefilledWhatsappLink() {
	return whatsappLink(m.whatsapp_prefill());
}
