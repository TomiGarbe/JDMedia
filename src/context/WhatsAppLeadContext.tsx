import { createContext, useContext, useMemo, useState } from 'react'

type OpenWhatsAppOptions = {
  topic: string
  page?: string
}

type WhatsAppLeadContextValue = {
  isOpen: boolean
  topic: string
  page?: string
  openWhatsApp: (options: OpenWhatsAppOptions) => void
  closeWhatsApp: () => void
}

const WhatsAppLeadContext = createContext<WhatsAppLeadContextValue | undefined>(undefined)

type WhatsAppLeadProviderProps = {
  children: React.ReactNode
}

export const WhatsAppLeadProvider = ({ children }: WhatsAppLeadProviderProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [topic, setTopic] = useState('servicios de JD Media')
  const [page, setPage] = useState<string | undefined>(undefined)

  const openWhatsApp = ({ topic: nextTopic, page: nextPage }: OpenWhatsAppOptions) => {
    setTopic(nextTopic)
    setPage(nextPage)
    setIsOpen(true)
  }

  const closeWhatsApp = () => {
    setIsOpen(false)
  }

  const value = useMemo(
    () => ({
      isOpen,
      topic,
      page,
      openWhatsApp,
      closeWhatsApp,
    }),
    [isOpen, topic, page]
  )

  return <WhatsAppLeadContext.Provider value={value}>{children}</WhatsAppLeadContext.Provider>
}

export const useWhatsAppLead = () => {
  const context = useContext(WhatsAppLeadContext)
  if (!context) {
    throw new Error('useWhatsAppLead must be used within WhatsAppLeadProvider')
  }
  return context
}
