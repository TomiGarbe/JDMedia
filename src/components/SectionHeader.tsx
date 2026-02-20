type SectionHeaderProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

const SectionHeader = ({ eyebrow, title, subtitle, align = 'left' }: SectionHeaderProps) => {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow ? <p className="chip">{eyebrow}</p> : null}
      <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-base text-muted md:text-lg">{subtitle}</p> : null}
    </div>
  )
}

export default SectionHeader
