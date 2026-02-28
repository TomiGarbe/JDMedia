import defaultClientLogoAsset from '../assets/logo-completo.png'

type LogoModule = {
  default: string
}

const logoModules = import.meta.glob<LogoModule>('../assets/logos-clientes/*.{png,jpg,jpeg,svg,webp}', {
  eager: true,
})

const logoExtensions = ['png', 'jpg', 'jpeg', 'svg', 'webp'] as const

const getLogoById = (id: string): string | undefined => {
  const logoBasePath = `../assets/logos-clientes/${id}`

  for (const extension of logoExtensions) {
    const modulePath = `${logoBasePath}.${extension}`
    const module = logoModules[modulePath]

    if (module) {
      return module.default
    }
  }

  return undefined
}

const clientIds = [
  'dr-humberto-dionisi',
  'boxescar',
  'la-azotea',
  'la-tiendita-de-paula',
  'meb-studio',
  'olivo-home',
  'noua',
  'viva-la-pepa',
  'va-uniformes',
  'gl-viajes',
  'turismo-explora',
  'sillas-y-mas',
  'eureka-amoblamientos',
  'servirepo',
  'vita-peluqueria',
  'gs-cloro',
  'darsie',
] as const

export const defaultClientLogo = defaultClientLogoAsset

export const clientLogos: Record<string, string> = clientIds.reduce(
  (accumulator, clientId) => {
    accumulator[clientId] = getLogoById(clientId) ?? defaultClientLogo
    return accumulator
  },
  {} as Record<string, string>,
)
