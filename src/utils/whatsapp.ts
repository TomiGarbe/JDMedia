const sanitizeNumber = (value?: string) => (value ? value.replace(/\D/g, '') : '')

const DEFAULT_NUMBER = '5490000000000'
const WHATSAPP_NUMBER = sanitizeNumber(import.meta.env.VITE_WHATSAPP_NUMBER) || DEFAULT_NUMBER

const BASE_TEMPLATE =
  'Hola Joaco, soy {nombre} de {empresa}. Quiero consultar por {servicio}. Podemos coordinar un meet?'

export const LEAD_STORAGE_KEY = 'whatsapp_lead'

type WhatsAppMessageParams = {
  name: string
  company: string
  topic: string
}

export const buildWhatsAppMessage = ({ name, company, topic }: WhatsAppMessageParams) => {
  return BASE_TEMPLATE.replace('{nombre}', name).replace('{empresa}', company).replace('{servicio}', topic)
}

export const buildWhatsAppLink = (message: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export type StoredLead = {
  name: string
  company: string
}

export const getStoredLead = (): StoredLead | null => {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(LEAD_STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as StoredLead
    if (!parsed?.name || !parsed?.company) return null
    return parsed
  } catch {
    return null
  }
}

export const saveStoredLead = (lead: StoredLead) => {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(LEAD_STORAGE_KEY, JSON.stringify(lead))
  } catch {
    // ignore storage errors
  }
}

export const clearStoredLead = () => {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.removeItem(LEAD_STORAGE_KEY)
  } catch {
    // ignore storage errors
  }
}
