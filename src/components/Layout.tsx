import { ReactNode } from 'react'
import FloatingWhatsApp from './FloatingWhatsApp'
import Footer from './Footer'
import Navbar from './Navbar'
import ScrollToTop from './ScrollToTop'
import WhatsAppLeadModal from './WhatsAppLeadModal'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[60] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-background focus:outline-none focus:ring-2 focus:ring-accent"
      >
        Saltar al contenido
      </a>
      <Navbar />
      <ScrollToTop />
      <main id="main" className="pt-24">
        {children}
      </main>
      <Footer />
      <FloatingWhatsApp />
      <WhatsAppLeadModal />
    </div>
  )
}

export default Layout
