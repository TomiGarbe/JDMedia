export type Client = {
  id: string
  name: string
  industry: string
  instagram: string
  isActive: boolean
}

export const clients: Client[] = [
  {
    id: 'darsie',
    name: 'Darsie',
    industry: 'Construccion y hogar',
    instagram: 'https://www.instagram.com/',
    isActive: true,
  },
  {
    id: 'dr-humberto-dionisi',
    name: 'Dr. Humberto Dionisi',
    industry: 'Salud',
    instagram: 'https://www.instagram.com/',
    isActive: true,
  },
  {
    id: 'boxescar',
    name: 'BoxesCar',
    industry: 'Autos',
    instagram: 'https://www.instagram.com/',
    isActive: false,
  },
  {
    id: 'la-azotea',
    name: 'La Azotea',
    industry: 'Turismo',
    instagram: 'https://www.instagram.com/',
    isActive: true,
  },
  {
    id: 'eureka-amoblamientos',
    name: 'Eureka Amoblamientos',
    industry: 'Muebles',
    instagram: 'https://www.instagram.com/',
    isActive: false,
  },
  {
    id: 'vita',
    name: 'Vita',
    industry: 'Peluqueria',
    instagram: 'https://www.instagram.com/',
    isActive: true,
  },
]
