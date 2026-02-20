import CTA from '../components/CTA'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'
import Seo from '../components/Seo'
import { clients } from '../data/clients'

const Clientes = () => {
  const activeClients = clients.filter((client) => client.isActive)
  const previousClients = clients.filter((client) => !client.isActive)

  const renderClientCard = (client: (typeof clients)[number]) => (
    <div key={client.id} className="card flex items-center gap-4 p-6">
      <div className="grid h-14 w-14 place-items-center rounded-2xl border border-border/30 bg-background text-sm font-semibold text-foreground">
        {client.name
          .split(' ')
          .map((word) => word[0])
          .join('')
          .slice(0, 3)}
      </div>
      <div>
        <p className="text-sm font-semibold text-foreground">{client.name}</p>
        <p className="text-xs text-muted">{client.industry}</p>
      </div>
      <span
        className={`ml-auto rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${
          client.isActive ? 'bg-accent text-black' : 'bg-white/10 text-muted'
        }`}
      >
        {client.isActive ? 'Activo' : 'Anterior'}
      </span>
    </div>
  )

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
            eyebrow="Clientes activos"
            title="Clientes activos"
            subtitle="Empresas con las que actualmente trabajamos de forma continua."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {activeClients.map((client) => renderClientCard(client))}
          </div>
        </Reveal>
      </section>

      <section className="section pt-0">
        <Reveal className="mx-auto max-w-6xl px-5">
          <SectionHeader
            eyebrow="Clientes anteriores"
            title="Clientes anteriores"
            subtitle="Marcas que formaron parte de nuestra trayectoria y confiaron en JD Media en etapas anteriores."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {previousClients.map((client) => renderClientCard(client))}
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
