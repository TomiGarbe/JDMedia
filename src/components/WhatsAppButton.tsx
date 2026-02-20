import { ReactNode } from 'react'
import { useWhatsAppLead } from '../context/WhatsAppLeadContext'
import { trackEvent } from '../utils/tracking'

type WhatsAppButtonProps = {
  topic?: string
  page?: string
  className?: string
  children: ReactNode
  variant?: 'primary' | 'ghost' | 'floating' | 'icon' | 'iconPlain'
}

const WhatsAppButton = ({
  topic = 'servicios de JD Media',
  page = 'General',
  className = '',
  children,
  variant = 'primary',
}: WhatsAppButtonProps) => {
  const { openWhatsApp } = useWhatsAppLead()

  const baseClasses =
    'inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none'

  const variantClasses = {
    primary: 'px-6 py-3 bg-accent text-black shadow-soft hover:scale-[1.02] hover:bg-accent/90 hover:shadow-glow',
    ghost: 'px-6 py-3 border border-accent text-accent hover:scale-[1.02] hover:bg-accent/10',
    floating:
      'h-16 w-16 rounded-full bg-accent text-black shadow-glow ring-1 ring-accent/40 transition hover:scale-105',
    icon: 'h-10 w-10 rounded-full border border-border/30 bg-card text-foreground hover:scale-105 hover:border-accent hover:shadow-glow',
    iconPlain:
      'h-auto w-auto rounded-none border-0 bg-transparent p-0 text-foreground shadow-none hover:scale-100 hover:border-transparent hover:shadow-none',
  }

  const handleClick = () => {
    trackEvent('whatsapp_click', { topic, page })
    openWhatsApp({ topic, page })
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={`Contactar por WhatsApp sobre ${topic}`}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  )
}

export default WhatsAppButton
