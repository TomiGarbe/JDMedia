import { Link } from 'react-router-dom'
import ClientCard from '../components/ClientCard'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import Seo from '../components/Seo'
import { clients } from '../data/clients'
import { services } from '../data/services'

const Home = () => {
  const activeClients = clients.filter((client) => client.isActive)

  return (
    <>
      <Seo
        title="Estrategia digital con foco en crecimiento real"
        description="Ayudamos a empresas y emprendedores a estructurar su presencia online, optimizar su inversion en Meta Ads y construir marcas solidas."
      />
      <PageHero
        eyebrow="Agencia de crecimiento"
        title="Estrategia digital con foco en crecimiento real."
        subtitle="Ayudamos a empresas y emprendedores a estructurar su presencia online, optimizar su inversion en Meta Ads y construir marcas solidas."
        extra={
          <div className="card space-y-4 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Lo que priorizamos</p>
            <div className="space-y-3 text-sm text-muted">
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <p>Estrategia clara y accionable para cada canal.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <p>Optimizacion semanal con datos reales.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <p>Marcas con identidad profesional y coherente.</p>
              </div>
            </div>
          </div>
        }
      />

      <section className="section">
        <Reveal className="mx-auto max-w-6xl px-5">
          <SectionHeader
            eyebrow="Problemas + beneficios"
            title="De la intuicion a una estrategia que se sostiene"
            subtitle="Publicas y no pasa nada, falta de tiempo o anuncios sin resultados. Ordenamos la comunicacion y optimizamos cada paso."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="card p-6">
              <h3 className="text-lg font-semibold">Lo que suele pasar</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <li>Publicas y no pasa nada.</li>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <li>Falta tiempo para sostener el contenido.</li>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <li>Anuncios sin resultados reales.</li>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <li>Todo depende de vos.</li>
                </div>
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-semibold">Lo que ganas con JD Media</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <li>Estrategia clara y coordinada.</li>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <li>Ahorro de tiempo y foco en tu negocio.</li>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <li>Marca profesional y consistente.</li>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <li>Optimizacion semanal con datos medibles.</li>
                </div>
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section">
        <Reveal className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <SectionHeader
              eyebrow="Servicios"
              title="Soluciones completas para crecer con orden"
              subtitle="Desde la estrategia hasta la ejecucion, con foco en resultados y consistencia."
            />
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 80}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section">
        <Reveal className="mx-auto max-w-6xl px-5">
          <SectionHeader
            eyebrow="Metodo JD"
            title="Un proceso claro para avanzar sin improvisar"
            subtitle="Cada etapa tiene objetivos concretos y una forma de medir resultados."
          />
          <div className="mt-10 grid items-stretch gap-6 md:grid-cols-5">
            {[
              'Diagnostico',
              'Plan estrategico',
              'Implementacion',
              'Optimizacion continua',
              'Medicion y proximos pasos',
            ].map((step, index) => (
              <Reveal key={step} delay={index * 70} className="h-full">
                <div className="card flex h-full min-h-[70px] flex-col gap-4 border-accent/30 p-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                    Paso {index + 1}
                  </span>
                  <p className="text-sm font-semibold text-foreground">{step}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section">
        <Reveal className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <SectionHeader
              eyebrow="Clientes activos"
              title="Clientes activos"
              subtitle="Marcas que actualmente estan trabajando con JD Media y confian en nuestra gestion digital."
            />
            <Link
              to="/clientes"
              className="rounded-full border border-border/30 bg-card px-5 py-2 text-sm font-semibold text-foreground transition-all duration-300 hover:scale-[1.02] hover:border-accent hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Ver todos
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {activeClients.map((client, index) => (
              <Reveal key={client.id} delay={index * 70}>
                <ClientCard client={client} />
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

    </>
  )
}

export default Home
