import { Link } from 'react-router-dom'
import logo from '../assets/logo-letras.jpeg'
import { socialLinks } from '../data/socials'
import InstagramIcon from './icons/InstagramIcon'
import TikTokIcon from './icons/TikTokIcon'
import WhatsAppIcon from './icons/WhatsAppIcon'
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
            <WhatsAppButton
              topic="servicios de JD Media"
              page="Footer"
              variant="iconPlain"
              className="inline-flex text-muted transition-colors duration-300 hover:text-accent focus-visible:outline-none"
            >
              <WhatsAppIcon />
            </WhatsAppButton>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram JD Media"
              className="inline-flex text-muted transition-colors duration-300 hover:text-accent focus-visible:outline-none"
            >
              <InstagramIcon />
            </a>
            <a
              href={socialLinks.tiktok}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="TikTok JD Media"
              className="inline-flex text-muted transition-colors duration-300 hover:text-accent focus-visible:outline-none"
            >
              <TikTokIcon />
            </a>
          </div>
        </div>
        <div className="grid gap-6 text-sm md:grid-cols-2">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bg">Secciones</p>
            <nav className="flex flex-col gap-2 text-muted">
              <Link
                className="hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                to="/servicios"
              >
                Servicios
              </Link>
              <Link
                className="hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                to="/clientes"
              >
                Clientes
              </Link>
              <Link
                className="hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                to="/nosotros"
              >
                Nosotros
              </Link>
              <Link
                className="hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                to="/insights"
              >
                Insights
              </Link>
            </nav>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bg">Social</p>
            <nav className="flex flex-col gap-2 text-muted">
              <a
                className="hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                href={socialLinks.instagram}
                target="_blank"
                rel="noreferrer noopener"
              >
                Instagram
              </a>
              <a
                className="hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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
