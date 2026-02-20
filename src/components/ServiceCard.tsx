import { Link } from 'react-router-dom'
import { Service } from '../data/services'

type ServiceCardProps = {
  service: Service
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <Link
      to={`/servicios/${service.slug}`}
      aria-label={`Ver detalles de ${service.title}`}
      className="group card flex h-full flex-col justify-between p-6 transition hover:-translate-y-1 hover:border-accent/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">{service.category}</p>
        <h3 className="mt-4 text-xl font-semibold text-foreground">{service.title}</h3>
        <p className="mt-3 text-sm text-muted">{service.summary}</p>
      </div>
      <div className="mt-6 flex items-center justify-center text-sm font-semibold text-foreground">
        <span className="text-accent/80">Conocer servicio</span>
      </div>
    </Link>
  )
}

export default ServiceCard
