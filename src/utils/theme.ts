export type ThemeMode = 'light' | 'dark'

export const THEME_STORAGE_KEY = 'theme'

export const getStoredTheme = (): ThemeMode | null => {
  if (typeof window === 'undefined') return null
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY)
    return stored === 'dark' || stored === 'light' ? stored : null
  } catch {
    return null
  }
}

export const getSystemTheme = (): ThemeMode => {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export const getInitialTheme = (): ThemeMode => {
  return getStoredTheme() ?? getSystemTheme()
}

export const applyTheme = (theme: ThemeMode) => {
  if (typeof document === 'undefined') return
  document.documentElement.classList.toggle('dark', theme === 'dark')
}
