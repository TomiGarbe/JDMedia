import { ReactNode } from 'react'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

const Reveal = ({ children, className = '', delay = 0 }: RevealProps) => {
  const { ref, isVisible } = useRevealOnScroll({
    threshold: 0.2,
    rootMargin: '0px 0px -10% 0px',
  })

  return (
    <div
      ref={ref}
      className={`${className} reveal ${isVisible ? 'reveal--visible visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default Reveal
