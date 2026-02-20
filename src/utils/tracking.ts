type TrackProps = Record<string, string | number | boolean | undefined>

export const trackEvent = (name: string, props: TrackProps = {}) => {
  console.log('[track]', name, props)
}
