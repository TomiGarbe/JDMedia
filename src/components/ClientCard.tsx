import type { Client } from '../data/clients'
import InstagramIcon from './icons/InstagramIcon'

type ClientCardProps = {
  client: Client
  showStatus?: boolean
  className?: string
}

const ClientCard = ({ client, showStatus = false, className = '' }: ClientCardProps) => {
  const hasInstagram = client.instagram.trim().length > 0

  return (
    <div className={`card flex items-center gap-4 p-6 ${className}`.trim()}>
      <div className="grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-full border border-border/30 bg-white/5 p-2 md:h-[4.25rem] md:w-[4.25rem]">
        <img src={client.logo} alt={`Logo de ${client.name}`} className="h-full w-full object-contain" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-foreground">{client.name}</p>
        <p className="truncate text-xs text-muted">{client.industry}</p>
      </div>

      <div className="ml-auto flex items-center gap-2">
        {showStatus && client.isActive && (
          <span className="rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-black">
            Activo
          </span>
        )}

        {hasInstagram && (
          <a
            href={client.instagram}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`Instagram de ${client.name}`}
            className="inline-flex shrink-0 text-muted transition-colors duration-300 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <InstagramIcon />
          </a>
        )}
      </div>
    </div>
  )
}

export default ClientCard
