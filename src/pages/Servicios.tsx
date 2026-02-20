import CTA from '../components/CTA'
import PageHero from '../components/PageHero'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import Seo from '../components/Seo'
import { services } from '../data/services'

const Servicios = () => {
  return (
    <>
      <Seo
        title="Servicios"
        description="Gestion de redes, Meta Ads, branding y produccion de contenido para marcas que buscan crecer con orden."
      />
      <PageHero
        eyebrow="Servicios"
        title="Soluciones pensadas para cada etapa del negocio"
        subtitle="Desde la base estrategica hasta la ejecucion diaria, con procesos claros y foco en resultados."
      />

      <section className="section">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <SectionHeader
              eyebrow="Listado"
              title="Todo lo que hacemos para impulsar tu marca"
              subtitle="Elegi el servicio que mejor se adapta a tus objetivos y conversemos."
            />
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <CTA
        page="Servicios"
        service="Servicios JD Media"
        title="Coordinemos un meet para definir prioridades"
        subtitle="Te ayudamos a elegir el servicio correcto segun el momento de tu negocio."
      />
    </>
  )
}

export default Servicios
