import whatsappIcon from '../assets/whatsapp.svg'
import WhatsAppButton from './WhatsAppButton'

const FloatingWhatsApp = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <WhatsAppButton variant="floating">
        <span className="sr-only">WhatsApp</span>
        <img src={whatsappIcon} alt="" className="h-8 w-8" />
      </WhatsAppButton>
    </div>
  )
}

export default FloatingWhatsApp
