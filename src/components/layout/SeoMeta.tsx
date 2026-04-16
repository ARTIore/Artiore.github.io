import { useEffect } from 'react'
import { applyMetadata } from '../../lib/seo'

type SeoMetaProps = {
  title: string
  description: string
  path?: string
  type?: 'website' | 'article'
}

export function SeoMeta(props: SeoMetaProps) {
  useEffect(() => {
    applyMetadata(props)
  }, [props])

  return null
}
