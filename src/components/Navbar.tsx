import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo-letras.jpeg'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Clientes', to: '/clientes' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Insights', to: '/insights' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => setIsOpen((prev) => !prev)
  const handleClose = () => setIsOpen(false)

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="border-b border-accent/20 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link to="/" className="flex items-center gap-3 text-lg font-semibold text-foreground">
            <img src={logo} alt="JD Media" className="h-8 w-auto object-contain" />
            <span className="sr-only">JD Media</span>
          </Link>
          <nav className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-[0.2em] md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-full px-2 py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                    isActive ? 'text-foreground underline decoration-accent decoration-2 underline-offset-8' : 'text-muted hover:text-foreground'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-border/30 bg-card px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground transition hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:hidden"
              onClick={handleToggle}
              aria-label="Abrir menu de navegacion"
            >
              Menu
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="fixed inset-0 bg-foreground/40 backdrop-blur-sm" onClick={handleClose} />
          <div className="fixed right-4 top-20 w-[min(90vw,320px)] rounded-2xl border border-border/20 bg-card p-5 shadow-soft">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Navegacion</p>
              <button
                type="button"
                onClick={handleClose}
                className="rounded-full border border-border/30 px-2 py-1 text-xs font-semibold text-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Cerrar menu"
              >
                Cerrar
              </button>
            </div>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={handleClose}
                  className={({ isActive }) =>
                    `rounded-xl px-3 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                      isActive ? 'bg-accent text-black' : 'text-foreground hover:bg-background'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
