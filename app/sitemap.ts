import type { MetadataRoute } from 'next'
import { SITE } from './content'

// ponytail: uma pagina so, uma entrada so. Cresceu pra rotas, cresce aqui.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: SITE, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 }]
}
