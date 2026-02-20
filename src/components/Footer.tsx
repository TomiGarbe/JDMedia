import { Link } from 'react-router-dom'
import logo from '../assets/logo-completo.jpeg'
import instagramIcon from '../assets/instagram.svg'
import tiktokIcon from '../assets/tiktok.svg'
import whatsappIcon from '../assets/whatsapp.svg'
import { socialLinks } from '../data/socials'
import WhatsAppButton from './WhatsAppButton'

const Footer = () => {
  return (
    <footer className="border-t border-accent/20 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 md:flex-row md:items-start md:justify-between">
        <div className="space-y-4">
          <img src={logo} alt="JD Media" className="h-10 w-auto object-contain" />
          <p className="max-w-xs text-sm text-muted">
            Agencia de estrategia digital y performance en Meta Ads para marcas que quieren crecer con orden.
          </p>
          <div className="flex items-center gap-3">
            <WhatsAppButton topic="servicios de JD Media" page="Footer" variant="icon" className="text-foreground">
              <img src={whatsappIcon} alt="WhatsApp" className="h-5 w-5 dark:invert" />
            </WhatsAppButton>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram JD Media"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/30 bg-card transition hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <img src={instagramIcon} alt="Instagram" className="h-5 w-5 dark:invert" />
            </a>
            <a
              href={socialLinks.tiktok}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="TikTok JD Media"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/30 bg-card transition hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <img src={tiktokIcon} alt="TikTok" className="h-5 w-5 dark:invert" />
            </a>
          </div>
        </div>
        <div className="grid gap-6 text-sm md:grid-cols-2">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Secciones</p>
            <nav className="flex flex-col gap-2 text-muted">
              <Link
                className="hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                to="/servicios"
              >
                Servicios
              </Link>
              <Link
                className="hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                to="/clientes"
              >
                Clientes
              </Link>
              <Link
                className="hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                to="/nosotros"
              >
                Nosotros
              </Link>
              <Link
                className="hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                to="/insights"
              >
                Insights
              </Link>
            </nav>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Social</p>
            <nav className="flex flex-col gap-2 text-muted">
              <a
                className="hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                href={socialLinks.instagram}
                target="_blank"
                rel="noreferrer noopener"
              >
                Instagram
              </a>
              <a
                className="hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                href={socialLinks.tiktok}
                target="_blank"
                rel="noreferrer noopener"
              >
                TikTok
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div className="border-t border-accent/20 py-4 text-center text-xs text-muted">
        (c) {new Date().getFullYear()} JD Media. Todos los derechos reservados.
      </div>
    </footer>
  )
}

export default Footer
