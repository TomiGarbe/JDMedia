import { useEffect, useRef, useState, type MutableRefObject } from 'react'

type UseRevealOnScrollOptions = {
  threshold?: number
  rootMargin?: string
}

type ObserverStore = {
  observer: IntersectionObserver
  callbacks: Map<Element, (entry: IntersectionObserverEntry) => void>
}

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'
const DEFAULT_THRESHOLD = 0.2
const DEFAULT_ROOT_MARGIN = '0px 0px -10% 0px'
const observerStores = new Map<string, ObserverStore>()

const getStoreKey = (threshold: number, rootMargin: string): string => `${threshold}|${rootMargin}`

const getObserverStore = (threshold: number, rootMargin: string): ObserverStore => {
  const key = getStoreKey(threshold, rootMargin)
  const existingStore = observerStores.get(key)

  if (existingStore) {
    return existingStore
  }

  const callbacks = new Map<Element, (entry: IntersectionObserverEntry) => void>()
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        callbacks.get(entry.target)?.(entry)
      })
    },
    {
      threshold: [0, threshold],
      rootMargin,
    },
  )

  const store = { observer, callbacks }
  observerStores.set(key, store)
  return store
}

const releaseObserverStore = (threshold: number, rootMargin: string): void => {
  const key = getStoreKey(threshold, rootMargin)
  const store = observerStores.get(key)

  if (!store || store.callbacks.size > 0) {
    return
  }

  store.observer.disconnect()
  observerStores.delete(key)
}

export const useRevealOnScroll = (
  options: UseRevealOnScrollOptions = {},
): {
  ref: MutableRefObject<HTMLDivElement | null>
  isVisible: boolean
} => {
  const threshold = options.threshold ?? DEFAULT_THRESHOLD
  const rootMargin = options.rootMargin ?? DEFAULT_ROOT_MARGIN

  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY)

    const handleReducedMotionChange = (event: MediaQueryListEvent): void => {
      setReducedMotion(event.matches)
      if (event.matches) {
        setIsVisible(true)
      }
    }

    setReducedMotion(mediaQuery.matches)
    if (mediaQuery.matches) {
      setIsVisible(true)
    }

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handleReducedMotionChange)
      return () => mediaQuery.removeEventListener('change', handleReducedMotionChange)
    }

    mediaQuery.addListener(handleReducedMotionChange)
    return () => mediaQuery.removeListener(handleReducedMotionChange)
  }, [])

  useEffect(() => {
    const node = ref.current

    if (!node) {
      return
    }

    if (reducedMotion) {
      setIsVisible(true)
      return
    }

    const store = getObserverStore(threshold, rootMargin)

    const handleEntry = (entry: IntersectionObserverEntry): void => {
      if (entry.intersectionRatio >= threshold) {
        setIsVisible(true)
        return
      }

      if (!entry.isIntersecting || entry.intersectionRatio <= 0) {
        setIsVisible(false)
      }
    }

    store.callbacks.set(node, handleEntry)
    store.observer.observe(node)

    return () => {
      store.callbacks.delete(node)
      store.observer.unobserve(node)
      releaseObserverStore(threshold, rootMargin)
    }
  }, [reducedMotion, rootMargin, threshold])

  return {
    ref,
    isVisible,
  }
}
