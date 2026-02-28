import { clientLogos, defaultClientLogo } from './clientLogos'

export type Client = {
  id: string
  name: string
  industry: string
  instagram: string
  isActive: boolean
  logo: string
}

const getClientLogo = (id: string): string => clientLogos[id] ?? defaultClientLogo

export const clients: Client[] = [
  {
    id: 'dr-humberto-dionisi',
    name: 'Dr. Humberto Dionisi',
    industry: 'Salud',
    instagram: 'https://www.instagram.com/',
    isActive: true,
    logo: getClientLogo('dr-humberto-dionisi'),
  },
  {
    id: 'boxescar',
    name: 'Boxescar',
    industry: 'Automotriz',
    instagram: 'https://www.instagram.com/',
    isActive: true,
    logo: getClientLogo('boxescar'),
  },
  {
    id: 'la-azotea',
    name: 'La Azotea',
    industry: 'Turismo',
    instagram: 'https://www.instagram.com/',
    isActive: true,
    logo: getClientLogo('la-azotea'),
  },
  {
    id: 'la-tiendita-de-paula',
    name: 'La tiendita de Paula',
    industry: 'Retail',
    instagram: 'https://www.instagram.com/',
    isActive: true,
    logo: getClientLogo('la-tiendita-de-paula'),
  },
  {
    id: 'meb-studio',
    name: 'Meb Studio',
    industry: 'Diseno',
    instagram: 'https://www.instagram.com/',
    isActive: true,
    logo: getClientLogo('meb-studio'),
  },
  {
    id: 'olivo-home',
    name: 'Olivo Home',
    industry: 'Decoracion',
    instagram: 'https://www.instagram.com/',
    isActive: true,
    logo: getClientLogo('olivo-home'),
  },
  {
    id: 'noua',
    name: 'Noua',
    industry: 'Moda',
    instagram: 'https://www.instagram.com/',
    isActive: true,
    logo: getClientLogo('noua'),
  },
  {
    id: 'viva-la-pepa',
    name: 'Viva la pepa',
    industry: 'Gastronomia',
    instagram: 'https://www.instagram.com/',
    isActive: true,
    logo: getClientLogo('viva-la-pepa'),
  },
  {
    id: 'va-uniformes',
    name: 'VA Uniformes',
    industry: 'Indumentaria',
    instagram: 'https://www.instagram.com/',
    isActive: true,
    logo: getClientLogo('va-uniformes'),
  },
  {
    id: 'gl-viajes',
    name: 'GL Viajes',
    industry: 'Turismo',
    instagram: 'https://www.instagram.com/',
    isActive: true,
    logo: getClientLogo('gl-viajes'),
  },
  {
    id: 'turismo-explora',
    name: 'Turismo Explora',
    industry: 'Turismo',
    instagram: 'https://www.instagram.com/',
    isActive: true,
    logo: getClientLogo('turismo-explora'),
  },
  {
    id: 'sillas-y-mas',
    name: 'Sillas&M\u00e1s',
    industry: 'Muebles',
    instagram: 'https://www.instagram.com/',
    isActive: false,
    logo: getClientLogo('sillas-y-mas'),
  },
  {
    id: 'eureka-amoblamientos',
    name: 'Eureka Amoblamientos',
    industry: 'Muebles',
    instagram: 'https://www.instagram.com/',
    isActive: false,
    logo: getClientLogo('eureka-amoblamientos'),
  },
  {
    id: 'servirepo',
    name: 'ServiRepo',
    industry: 'Servicios tecnicos',
    instagram: 'https://www.instagram.com/',
    isActive: false,
    logo: getClientLogo('servirepo'),
  },
  {
    id: 'vita-peluqueria',
    name: 'Vita Peluquer\u00eda',
    industry: 'Belleza',
    instagram: 'https://www.instagram.com/',
    isActive: false,
    logo: getClientLogo('vita-peluqueria'),
  },
  {
    id: 'gs-cloro',
    name: 'Gs Cloro',
    industry: 'Limpieza',
    instagram: 'https://www.instagram.com/',
    isActive: false,
    logo: getClientLogo('gs-cloro'),
  },
  {
    id: 'darsie',
    name: 'Darsie',
    industry: 'Construccion y hogar',
    instagram: 'https://www.instagram.com/',
    isActive: false,
    logo: getClientLogo('darsie'),
  },
]
