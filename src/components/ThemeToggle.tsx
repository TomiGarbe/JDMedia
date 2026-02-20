import { useTheme } from '../context/ThemeContext'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Cambiar a tema ${isDark ? 'claro' : 'oscuro'}`}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/30 bg-card text-foreground transition hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      {isDark ? (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
          <path d="M12 3.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75Zm0 13a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5Zm7.25-3.25a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5H18.5a.75.75 0 0 1 .75.75Zm-13.75 0a.75.75 0 0 1-.75.75H3.25a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 .75.75Zm10.06-5.31a.75.75 0 0 1 1.06 0l1.06 1.06a.75.75 0 1 1-1.06 1.06l-1.06-1.06a.75.75 0 0 1 0-1.06ZM6.32 16.44a.75.75 0 0 1 1.06 0l1.06 1.06a.75.75 0 0 1-1.06 1.06l-1.06-1.06a.75.75 0 0 1 0-1.06Zm11.38 1.06a.75.75 0 0 1-1.06 0l-1.06-1.06a.75.75 0 1 1 1.06-1.06l1.06 1.06a.75.75 0 0 1 0 1.06ZM8.44 7.56a.75.75 0 0 1-1.06 0L6.32 6.5a.75.75 0 0 1 1.06-1.06l1.06 1.06a.75.75 0 0 1 0 1.06Zm3.56 10.69a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Z" />
        </svg>
      ) : (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
          <path d="M12.75 3.5a.75.75 0 0 0-.69 1.05 7.25 7.25 0 1 1-7.81 9.5.75.75 0 0 0-1.06.86A8.75 8.75 0 1 0 13.4 3.19a.75.75 0 0 0-.65.31Z" />
        </svg>
      )}
    </button>
  )
}

export default ThemeToggle
