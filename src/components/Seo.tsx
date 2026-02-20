import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { DEFAULT_DESCRIPTION, SITE_NAME, getSiteUrl, upsertMetaTag } from '../utils/seo'

type SeoProps = {
  title: string
  description?: string
}

const Seo = ({ title, description = DEFAULT_DESCRIPTION }: SeoProps) => {
  const location = useLocation()

  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME
    document.title = fullTitle

    upsertMetaTag('name', 'description', description)
    upsertMetaTag('property', 'og:title', fullTitle)
    upsertMetaTag('property', 'og:description', description)
    upsertMetaTag('property', 'og:type', 'website')
    upsertMetaTag('property', 'og:url', `${getSiteUrl()}${location.pathname}`)
  }, [title, description, location.pathname])

  return null
}

export default Seo
