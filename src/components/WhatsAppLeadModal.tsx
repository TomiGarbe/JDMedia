import { useEffect, useRef, useState } from 'react'
import { useWhatsAppLead } from '../context/WhatsAppLeadContext'
import { buildWhatsAppLink, buildWhatsAppMessage, clearStoredLead, getStoredLead, saveStoredLead } from '../utils/whatsapp'
import { trackEvent } from '../utils/tracking'

const WhatsAppLeadModal = () => {
  const { isOpen, topic, page, closeWhatsApp } = useWhatsAppLead()
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [error, setError] = useState('')
  const [hasStoredLead, setHasStoredLead] = useState(false)
  const nameRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!isOpen) return
    const stored = getStoredLead()
    setName(stored?.name || '')
    setCompany(stored?.company || '')
    setHasStoredLead(Boolean(stored))
    setError('')
    const id = window.setTimeout(() => nameRef.current?.focus(), 50)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.clearTimeout(id)
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeWhatsApp()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, closeWhatsApp])

  if (!isOpen) return null

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!name.trim() || !company.trim()) {
      setError('Completa nombre y empresa para continuar.')
      return
    }

    const trimmedName = name.trim()
    const trimmedCompany = company.trim()
    saveStoredLead({ name: trimmedName, company: trimmedCompany })
    setHasStoredLead(true)

    const message = buildWhatsAppMessage({
      name: trimmedName,
      company: trimmedCompany,
      topic,
    })

    trackEvent('whatsapp_lead_confirm', { topic, page })
    window.open(buildWhatsAppLink(message), '_blank', 'noopener,noreferrer')
    closeWhatsApp()
  }

  const handleClear = () => {
    clearStoredLead()
    setHasStoredLead(false)
    setName('')
    setCompany('')
    nameRef.current?.focus()
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeWhatsApp} />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="whatsapp-modal-title"
        className="relative w-full max-w-md rounded-2xl border border-accent bg-card p-6 text-foreground shadow-soft"
      >
        <button
          type="button"
          onClick={closeWhatsApp}
          aria-label="Cerrar modal"
          className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/30 text-muted transition hover:border-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          ✕
        </button>
        <h3 id="whatsapp-modal-title" className="text-xl font-semibold">
          Antes de continuar
        </h3>
        <p className="mt-2 text-sm text-muted">
          Necesitamos tus datos para personalizar el mensaje a JD Media.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="lead-name" className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Tu Nombre
            </label>
            <input
              ref={nameRef}
              id="lead-name"
              name="lead-name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              type="text"
              autoComplete="name"
              className="mt-2 w-full rounded-xl border border-border/30 bg-background px-4 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              required
            />
          </div>
          <div>
            <label htmlFor="lead-company" className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Nombre del Negocio
            </label>
            <input
              id="lead-company"
              name="lead-company"
              value={company}
              onChange={(event) => setCompany(event.target.value)}
              type="text"
              autoComplete="organization"
              className="mt-2 w-full rounded-xl border border-border/30 bg-background px-4 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              required
            />
          </div>

          {error ? <p className="text-xs font-semibold text-accent">{error}</p> : null}

          {hasStoredLead ? (
            <button
              type="button"
              onClick={handleClear}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-muted underline decoration-accent underline-offset-4"
            >
              Editar datos
            </button>
          ) : null}

          <div className="flex flex-col gap-3 pt-2 sm:flex-row justify-center">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-black transition hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:w-auto"
            >
              Continuar a WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default WhatsAppLeadModal
