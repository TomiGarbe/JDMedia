import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import WhatsAppButton from '../components/WhatsAppButton'

const NotFound = () => {
  return (
    <section className="section">
      <Seo title="Pagina no encontrada" description="La pagina solicitada no existe." />
      <div className="mx-auto max-w-4xl px-5 text-center">
        <p className="chip mx-auto">404</p>
        <h1 className="mt-4 text-3xl font-semibold">No encontramos esta pagina</h1>
        <p className="mt-3 text-sm text-muted">
          Podes volver al inicio o escribirnos para recibir asistencia.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="rounded-full border border-border/30 bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Volver al inicio
          </Link>
          <WhatsAppButton topic="Ayuda" page="404">
            Hablar por WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  )
}

export default NotFound
