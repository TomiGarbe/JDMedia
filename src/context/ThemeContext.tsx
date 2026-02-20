import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { applyTheme, getInitialTheme, getStoredTheme, ThemeMode, THEME_STORAGE_KEY } from '../utils/theme'

type ThemeContextValue = {
  theme: ThemeMode
  toggleTheme: () => void
  setTheme: (theme: ThemeMode) => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

type ThemeProviderProps = {
  children: React.ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setThemeState] = useState<ThemeMode>(() => getInitialTheme())
  const [hasStoredTheme, setHasStoredTheme] = useState(() => getStoredTheme() !== null)

  useEffect(() => {
    applyTheme(theme)
    if (hasStoredTheme) {
      try {
        window.localStorage.setItem(THEME_STORAGE_KEY, theme)
      } catch {
        // Ignore storage errors
      }
    }
  }, [theme, hasStoredTheme])

  useEffect(() => {
    if (hasStoredTheme) return
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (event: MediaQueryListEvent) => {
      setThemeState(event.matches ? 'dark' : 'light')
    }
    media.addEventListener('change', handler)
    return () => media.removeEventListener('change', handler)
  }, [hasStoredTheme])

  const setTheme = (nextTheme: ThemeMode) => {
    setHasStoredTheme(true)
    setThemeState(nextTheme)
  }

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
  }

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
      setTheme,
    }),
    [theme]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
