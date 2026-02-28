import ClientCard from '../components/ClientCard'
import CTA from '../components/CTA'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'
import Seo from '../components/Seo'
import { clients } from '../data/clients'

const Clientes = () => {
  const sortedClients = [...clients].sort((clientA, clientB) => {
    if (clientA.isActive !== clientB.isActive) {
      return Number(clientB.isActive) - Number(clientA.isActive)
    }

    return clientA.name.localeCompare(clientB.name, 'es', {
      sensitivity: 'base',
    })
  })

  return (
    <>
      <Seo
        title="Clientes"
        description="Marcas de distintos rubros que confiaron en JD Media para ordenar su estrategia digital."
      />
      <PageHero
        eyebrow="Clientes"
        title="Relaciones profesionales basadas en resultados"
        subtitle="Trabajamos con negocios en crecimiento que buscan un equipo estrategico y confiable."
      />

      <section className="section">
        <Reveal className="mx-auto max-w-6xl px-5">
          <SectionHeader
            eyebrow="Clientes"
            title="Todos nuestros clientes"
            subtitle="Marcas activas y pausadas que confiaron en JD Media en distintas etapas."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sortedClients.map((client) => (
              <ClientCard key={client.id} client={client} showStatus />
            ))}
          </div>
        </Reveal>
      </section>

      <CTA
        page="Clientes"
        service="Resultados para marcas"
        title="Tu marca puede ser la proxima"
        subtitle="Coordinemos un meet y definamos una estrategia de crecimiento."
      />
    </>
  )
}

export default Clientes
