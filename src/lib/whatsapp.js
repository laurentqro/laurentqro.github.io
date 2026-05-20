// TODO: replace with real number before deploying.
// Format: international, digits only (no +, no spaces). Example: 33612345678.
export const WHATSAPP_NUMBER = '00000000000';

export function whatsappLink(prefillText = '') {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return prefillText ? `${base}?text=${encodeURIComponent(prefillText)}` : base;
}
