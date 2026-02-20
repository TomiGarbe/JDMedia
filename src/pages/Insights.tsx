import PageHero from '../components/PageHero'
import SectionHeader from '../components/SectionHeader'
import Seo from '../components/Seo'

const Insights = () => {
  const placeholders = [
    {
      title: 'Como ordenar tu estrategia digital antes de invertir en anuncios',
      tag: 'Estrategia',
    },
    {
      title: 'Checklist para evaluar si tu marca esta lista para escalar',
      tag: 'Branding',
    },
    {
      title: 'Indicadores clave para medir resultados en Meta Ads',
      tag: 'Performance',
    },
  ]

  return (
    <>
      <Seo
        title="Insights"
        description="Notas y recursos sobre estrategia digital, branding y Meta Ads. Seccion en construccion."
      />
      <PageHero
        eyebrow="Insights"
        title="Ideas y recursos listos para crecer"
        subtitle="Muy pronto vamos a publicar casos, aprendizajes y guias practicas."
      />

      <section className="section">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeader
            eyebrow="En preparacion"
            title="Contenido que aporta claridad"
            subtitle="Mientras tanto, podemos conversar sobre tu caso y darte una direccion clara."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {placeholders.map((item) => (
              <div key={item.title} className="card flex h-full flex-col justify-between p-6">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">{item.tag}</span>
                <p className="mt-4 text-base font-semibold text-foreground">{item.title}</p>
                <span className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Proximamente
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}

export default Insights
