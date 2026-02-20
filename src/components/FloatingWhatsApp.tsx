import { useLocation } from 'react-router-dom'
import whatsappIcon from '../assets/whatsapp.svg'
import { services } from '../data/services'
import WhatsAppButton from './WhatsAppButton'

const FloatingWhatsApp = () => {
  const location = useLocation()
  const segments = location.pathname.split('/').filter(Boolean)
  const isServiceDetail = segments[0] === 'servicios' && segments.length === 2
  const service = isServiceDetail ? services.find((item) => item.slug === segments[1]) : undefined
  const topic = service?.whatsappTopic ?? 'servicios de JD Media'
  const page = service ? `Servicio ${service.title}` : 'General'

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <WhatsAppButton topic={topic} page={page} variant="floating">
        <span className="sr-only">WhatsApp</span>
        <img src={whatsappIcon} alt="" className="h-8 w-8" />
      </WhatsAppButton>
    </div>
  )
}

export default FloatingWhatsApp
