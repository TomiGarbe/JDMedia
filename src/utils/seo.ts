export const SITE_NAME = 'JD Media'
export const DEFAULT_DESCRIPTION =
  'Agencia de estrategia digital enfocada en crecimiento real. Gestion de redes, Meta Ads y branding para marcas que quieren escalar.'

export const getSiteUrl = () => {
  if (typeof window !== 'undefined') {
    return import.meta.env.VITE_SITE_URL || window.location.origin
  }
  return import.meta.env.VITE_SITE_URL || ''
}

export const upsertMetaTag = (attribute: 'name' | 'property', key: string, content: string) => {
  let element = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}
