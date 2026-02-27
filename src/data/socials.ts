const sanitizeNumber = (value?: string) => (value ? value.replace(/\D/g, '') : '')

const DEFAULT_NUMBER = '5490000000000'
const WHATSAPP_NUMBER = sanitizeNumber(import.meta.env.VITE_WHATSAPP_NUMBER) || DEFAULT_NUMBER

export const socialLinks = {
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}`,
  instagram: 'https://instagram.com/jdmedia.digital',
  tiktok: 'https://tiktok.com/@jdmedia.digital',
}
