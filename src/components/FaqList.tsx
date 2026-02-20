type FaqItem = {
  question: string
  answer: string
}

type FaqListProps = {
  items: FaqItem[]
}

const FaqList = ({ items }: FaqListProps) => {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details key={item.question} className="group rounded-2xl border border-border/20 bg-card p-5 shadow-soft">
          <summary className="cursor-pointer list-none text-base font-semibold text-foreground">
            <span>{item.question}</span>
          </summary>
          <p className="mt-3 text-sm text-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  )
}

export default FaqList
