import { ReactNode } from 'react'
import { useWhatsAppLead } from '../context/WhatsAppLeadContext'
import { trackEvent } from '../utils/tracking'

type WhatsAppButtonProps = {
  topic?: string
  page?: string
  className?: string
  children: ReactNode
  variant?: 'primary' | 'ghost' | 'floating' | 'icon'
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
    'inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent'

  const variantClasses = {
    primary: 'px-6 py-3 bg-accent text-black hover:bg-accent/90 shadow-soft',
    ghost: 'px-6 py-3 border border-accent text-accent hover:bg-accent/10',
    floating:
      'h-16 w-16 rounded-full bg-accent text-black shadow-glow ring-1 ring-accent/40 transition hover:scale-105',
    icon: 'h-10 w-10 rounded-full border border-border/30 bg-card text-foreground hover:border-accent',
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
