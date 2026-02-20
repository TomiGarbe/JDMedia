import { Link, useParams } from 'react-router-dom'
import CTA from '../components/CTA'
import FaqList from '../components/FaqList'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'
import Seo from '../components/Seo'
import WhatsAppButton from '../components/WhatsAppButton'
import { services } from '../data/services'

const ServiceDetail = () => {
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)

  if (!service) {
    return (
      <section className="section">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h1 className="text-3xl font-semibold">Servicio no encontrado</h1>
          <p className="mt-3 text-sm text-muted">
            El servicio que buscas no existe o fue actualizado.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/servicios"
              className="rounded-full border border-border/30 bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Ver servicios
            </Link>
            <WhatsAppButton topic="Servicios JD Media" page="Servicio no encontrado">
              Hablar por WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <Seo title={service.seoTitle} description={service.seoDescription} />
      <PageHero
        eyebrow="Servicio"
        title={service.heroTitle}
        subtitle={service.heroDescription}
        extra={
          <div className="card space-y-3 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Para quien es</p>
            <p className="text-sm text-muted">{service.forWho}</p>
          </div>
        }
      />

      <section className="section">
        <Reveal className="mx-auto max-w-5xl px-5">
          <SectionHeader
            eyebrow="Que incluye"
            title="Alcance claro para avanzar sin dudas"
            subtitle="Todo lo necesario para ejecutar el servicio con consistencia y medir resultados."
          />
          <ul className="mt-6 space-y-3 text-sm text-muted">
            {service.includes.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="section">
        <Reveal className="mx-auto max-w-6xl px-5">
          <SectionHeader
            eyebrow="Como trabajamos"
            title="Proceso simple y bien gestionado"
            subtitle="Cada etapa tiene entregables claros y foco en calidad."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {service.process.map((step, index) => (
              <Reveal key={step} delay={index * 70}>
                <div className="card flex flex-col gap-4 p-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                    Etapa {index + 1}
                  </span>
                  <p className="text-sm font-semibold text-foreground">{step}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section">
        <Reveal className="mx-auto max-w-4xl px-5">
          <SectionHeader
            eyebrow="FAQ"
            title="Preguntas frecuentes"
            subtitle="Resolvemos las dudas mas comunes antes de empezar."
            align="center"
          />
          <div className="mt-8">
            <FaqList items={service.faqs} />
          </div>
        </Reveal>
      </section>

      <CTA
        page={`Servicio ${service.title}`}
        service={service.whatsappTopic}
        title="Listo para avanzar con este servicio"
        subtitle="Escribinos por WhatsApp y coordinemos un meet."
      />
    </>
  )
}

export default ServiceDetail
