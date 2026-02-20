import CTA from '../components/CTA'
import PageHero from '../components/PageHero'
import SectionHeader from '../components/SectionHeader'
import Seo from '../components/Seo'
import { clients } from '../data/clients'

const Clientes = () => {
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
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeader
            eyebrow="Grilla de marcas"
            title="Alianzas en diferentes industrias"
            subtitle="Construccion, salud, turismo, muebles, belleza y mas."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {clients.map((client) => (
              <div key={client.name} className="card flex items-center gap-4 p-6">
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
              </div>
            ))}
          </div>
        </div>
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
