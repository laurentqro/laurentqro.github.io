// Format: international, digits only (no +, no spaces).
export const WHATSAPP_NUMBER = '33675298871';

export function whatsappLink(prefillText = '') {
	const base = `https://wa.me/${WHATSAPP_NUMBER}`;
	return prefillText ? `${base}?text=${encodeURIComponent(prefillText)}` : base;
}
