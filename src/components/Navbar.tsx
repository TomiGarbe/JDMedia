import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/logo-letras.png'
import { services } from '../data/services'

const navLinks = [
  { label: 'HOME', to: '/' },
  { label: 'CLIENTES', to: '/clientes' },
  { label: 'NOSOTROS', to: '/nosotros' },
  { label: 'INSIGHTS', to: '/insights' },
]

const desktopNavItemClass =
  'rounded-full px-2 py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background'

const mobileNavItemClass =
  'rounded-xl px-3 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const [servicesColumnLeft, setServicesColumnLeft] = useState(0)

  const location = useLocation()
  const navigate = useNavigate()

  const servicesButtonRef = useRef<HTMLButtonElement>(null)
  const servicesSubNavRef = useRef<HTMLDivElement>(null)
  const subNavInnerRef = useRef<HTMLDivElement>(null)
  const servicesColumnRef = useRef<HTMLDivElement>(null)

  const isServicesRoute =
    location.pathname === '/servicios' || location.pathname.startsWith('/servicios/')
  const currentServiceSlug = location.pathname.startsWith('/servicios/')
    ? location.pathname.split('/')[2] ?? ''
    : ''

  const closeMobileMenu = () => {
    setIsOpen(false)
    setIsMobileServicesOpen(false)
  }

  const updateServicesColumnPosition = useCallback(() => {
    if (!servicesButtonRef.current || !subNavInnerRef.current || !servicesColumnRef.current) {
      return
    }

    const buttonRect = servicesButtonRef.current.getBoundingClientRect()
    const containerRect = subNavInnerRef.current.getBoundingClientRect()
    const columnRect = servicesColumnRef.current.getBoundingClientRect()
    const rawLeft = buttonRect.left - containerRect.left
    const maxLeft = Math.max(0, containerRect.width - columnRect.width)
    const clampedLeft = Math.min(Math.max(0, rawLeft), maxLeft)

    setServicesColumnLeft(clampedLeft)
  }, [])

  const handleDesktopServicesClick = () => {
    if (isServicesOpen) {
      setIsServicesOpen(false)
      navigate('/servicios')
      return
    }

    setIsServicesOpen(true)
  }

  const handleDesktopServiceLinkClick = () => {
    setIsServicesOpen(false)
  }

  useEffect(() => {
    setIsOpen(false)
    setIsServicesOpen(false)
    setIsMobileServicesOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!isServicesOpen) {
      return
    }

    updateServicesColumnPosition()

    const handleResize = () => {
      updateServicesColumnPosition()
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isServicesOpen, updateServicesColumnPosition])

  useEffect(() => {
    if (!isServicesOpen) {
      return
    }

    const handleClickOutside = (event: MouseEvent) => {
      const targetNode = event.target as Node

      if (
        servicesButtonRef.current?.contains(targetNode) ||
        servicesSubNavRef.current?.contains(targetNode)
      ) {
        return
      }

      setIsServicesOpen(false)
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isServicesOpen])

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') {
        return
      }

      setIsOpen(false)
      setIsServicesOpen(false)
      setIsMobileServicesOpen(false)
    }

    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="border-b border-[#ffd400]/45 bg-background/90 backdrop-blur transition-colors duration-300">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link to="/" className="flex items-center gap-3 text-lg font-semibold text-foreground">
            <img src={logo} alt="JD Media" className="h-7 w-auto object-contain" />
            <span className="sr-only">JD Media</span>
          </Link>

          <nav className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-[0.2em] md:flex">
            <NavLink
              to="/"
              onClick={() => setIsServicesOpen(false)}
              className={({ isActive }) =>
                `${desktopNavItemClass} ${
                  isActive
                    ? 'text-foreground underline decoration-accent decoration-2 underline-offset-8'
                    : 'text-muted hover:text-foreground'
                }`
              }
            >
              HOME
            </NavLink>

            <button
              ref={servicesButtonRef}
              type="button"
              onClick={handleDesktopServicesClick}
              className={`${desktopNavItemClass} ${
                isServicesRoute || isServicesOpen
                  ? 'text-foreground underline decoration-accent decoration-2 underline-offset-8'
                  : 'text-muted hover:text-foreground'
              }`}
              aria-haspopup="menu"
              aria-expanded={isServicesOpen}
              aria-controls="desktop-services-subnav"
            >
              SERVICIOS
            </button>

            {navLinks
              .filter((link) => link.to !== '/')
              .map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsServicesOpen(false)}
                  className={({ isActive }) =>
                    `${desktopNavItemClass} ${
                      isActive
                        ? 'text-foreground underline decoration-accent decoration-2 underline-offset-8'
                        : 'text-muted hover:text-foreground'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-border/30 bg-card px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground transition-all duration-300 hover:scale-[1.02] hover:border-accent hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:hidden"
              onClick={() => {
                setIsOpen((previousState) => !previousState)
                setIsServicesOpen(false)
              }}
              aria-label="Abrir menu de navegacion"
              aria-expanded={isOpen}
            >
              Menu
            </button>
          </div>
        </div>
      </div>

      <div
        ref={servicesSubNavRef}
        className={`hidden overflow-hidden border-b border-[#ffd400]/45 bg-background/95 backdrop-blur md:block motion-reduce:transition-none motion-safe:transition-[max-height,opacity,transform] motion-safe:duration-300 motion-safe:ease-out ${
          isServicesOpen
            ? 'max-h-80 opacity-100 motion-safe:translate-y-0'
            : 'pointer-events-none max-h-0 opacity-0 motion-safe:-translate-y-1'
        }`}
        aria-hidden={!isServicesOpen}
      >
        <div ref={subNavInnerRef} className="mx-auto max-w-6xl px-5 py-3">
          <div
            id="desktop-services-subnav"
            ref={servicesColumnRef}
            role="menu"
            aria-label="Lista de servicios"
            className="flex w-max flex-col gap-2"
            style={{ marginLeft: `${servicesColumnLeft}px` }}
          >
            {services.map((service) => {
              const isCurrentService = currentServiceSlug === service.slug

              return (
                <Link
                  key={service.slug}
                  role="menuitem"
                  to={`/servicios/${service.slug}`}
                  onClick={handleDesktopServiceLinkClick}
                  className={`inline-block py-1 text-xs font-semibold uppercase tracking-[0.2em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    isCurrentService
                      ? 'text-foreground underline decoration-accent decoration-2 underline-offset-8'
                      : 'text-muted hover:text-accent'
                  }`}
                >
                  {service.title}
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="fixed inset-0 bg-foreground/40 backdrop-blur-sm" onClick={closeMobileMenu} />
          <div className="fixed right-4 top-20 w-[min(90vw,320px)] rounded-2xl border border-border/20 bg-card p-5 shadow-soft">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Navegacion</p>
              <button
                type="button"
                onClick={closeMobileMenu}
                className="rounded-full border border-border/30 px-2 py-1 text-xs font-semibold text-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Cerrar menu"
              >
                Cerrar
              </button>
            </div>

            <div className="flex flex-col gap-3">
              <NavLink
                to="/"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `${mobileNavItemClass} ${isActive ? 'bg-accent text-black' : 'text-foreground hover:bg-background'}`
                }
              >
                HOME
              </NavLink>

              <div className="rounded-xl border border-border/20 bg-background/40 p-2">
                <button
                  type="button"
                  onClick={() => setIsMobileServicesOpen((previousState) => !previousState)}
                  className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-foreground transition hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-expanded={isMobileServicesOpen}
                  aria-controls="mobile-services-menu"
                >
                  <span>SERVICIOS</span>
                  <span aria-hidden="true">{isMobileServicesOpen ? '-' : '+'}</span>
                </button>

                {isMobileServicesOpen && (
                  <div id="mobile-services-menu" className="mt-2 flex flex-col gap-2 border-t border-border/20 pt-2">
                    <Link
                      to="/servicios"
                      onClick={closeMobileMenu}
                      className="rounded-lg px-2 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-muted transition hover:bg-background hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      Ver todos los servicios
                    </Link>
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        to={`/servicios/${service.slug}`}
                        onClick={closeMobileMenu}
                        className="rounded-lg px-2 py-2 text-sm font-semibold text-foreground transition hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navLinks
                .filter((link) => link.to !== '/')
                .map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      `${mobileNavItemClass} ${
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
