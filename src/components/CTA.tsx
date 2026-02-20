import WhatsAppButton from './WhatsAppButton'

type CTAProps = {
  title?: string
  subtitle?: string
  service?: string
  page?: string
  buttonLabel?: string
}

const CTA = ({
  title = 'Listos para ordenar tu estrategia digital',
  subtitle = 'Coordinamos un meet y definimos un plan claro para tu negocio.',
  service = 'Estrategia digital',
  page,
  buttonLabel = 'Hablar por WhatsApp',
}: CTAProps) => {
  return (
    <section className="section">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-3xl border border-border/20 bg-card px-6 py-10 shadow-soft md:flex-row md:items-center md:px-10">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Contacto directo</p>
          <h3 className="mt-3 text-2xl font-semibold md:text-3xl">{title}</h3>
          <p className="mt-3 text-sm text-muted md:text-base">{subtitle}</p>
        </div>
        <WhatsAppButton topic={service} page={page} className="w-full md:w-auto">
          {buttonLabel}
        </WhatsAppButton>
      </div>
    </section>
  )
}

export default CTA
