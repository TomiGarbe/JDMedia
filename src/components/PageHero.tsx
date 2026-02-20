import { ReactNode } from 'react'
import WhatsAppButton from './WhatsAppButton'

type PageHeroProps = {
  eyebrow?: string
  title: string
  subtitle: string
  topic?: string
  page?: string
  ctaLabel?: string
  extra?: ReactNode
}

const PageHero = ({ eyebrow, title, subtitle, topic, page, ctaLabel = 'Hablar por WhatsApp', extra }: PageHeroProps) => {
  return (
    <section className="relative overflow-hidden border-b border-accent/20">
      <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute -right-10 top-0 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-16 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl space-y-4 animate-fade-up">
          {eyebrow ? <p className="chip">{eyebrow}</p> : null}
          <h1 className="text-balance text-3xl font-semibold md:text-5xl">{title}</h1>
          <p className="text-base text-muted md:text-lg">{subtitle}</p>
          {topic ? (
            <div className="flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton topic={topic} page={page}>
                {ctaLabel}
              </WhatsAppButton>
            </div>
          ) : null}
        </div>
        {extra ? (
          <div className="w-full max-w-sm animate-fade-in" style={{ animationDelay: '120ms' }}>
            {extra}
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default PageHero
