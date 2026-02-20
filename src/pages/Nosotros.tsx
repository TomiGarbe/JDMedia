import CTA from '../components/CTA'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'
import Seo from '../components/Seo'

const Nosotros = () => {
  return (
    <>
      <Seo
        title="Nosotros"
        description="JD Media es una agencia de estrategia digital enfocada en resultados, procesos claros y marcas premium."
      />
      <PageHero
        eyebrow="Nosotros"
        title="Estrategia, criterio y ejecucion impecable"
        subtitle="Somos un equipo que combina marketing, diseno y performance para ayudar a marcas a crecer con orden."
      />

      <section className="section">
        <Reveal className="mx-auto max-w-6xl px-5">
          <SectionHeader
            eyebrow="Nuestra mirada"
            title="No creemos en la improvisacion"
            subtitle="Trabajamos con procesos claros, objetivos medibles y una comunicacion que cuida cada detalle."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Estrategia antes que ejecucion',
                description:
                  'Priorizamos el analisis para que cada accion tenga un proposito concreto.',
              },
              {
                title: 'Calidad visual y coherencia',
                description:
                  'La marca se construye con consistencia, por eso cuidamos cada pieza.',
              },
              {
                title: 'Resultados que se pueden medir',
                description:
                  'Tomamos decisiones con datos, no con intuicion.',
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <div className="card p-6">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm text-muted">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section">
        <Reveal className="mx-auto max-w-6xl px-5">
          <SectionHeader
            eyebrow="Diferenciales"
            title="Una agencia pensada para escalar"
            subtitle="Acompaniamos marcas con mentalidad premium y foco en crecimiento nacional."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal delay={40}>
              <div className="card p-6">
                <h3 className="text-lg font-semibold">Planificacion y foco</h3>
                <p className="mt-3 text-sm text-muted">
                  Cada canal tiene objetivos definidos y un ritmo de trabajo constante.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="card p-6">
                <h3 className="text-lg font-semibold">Equipo senior</h3>
                <p className="mt-3 text-sm text-muted">
                  Experiencia en marketing, diseno y performance para marcas en crecimiento.
                </p>
              </div>
            </Reveal>
          </div>
        </Reveal>
      </section>

      <CTA
        page="Nosotros"
        service="Meet estrategico"
        title="Conversemos sobre tu proximo paso"
        subtitle="Un meet corto puede ahorrar meses de prueba y error."
      />
    </>
  )
}

export default Nosotros
