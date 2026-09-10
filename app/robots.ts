import type { MetadataRoute } from 'next'
import { SITE } from './content'

// Sem isso o export estático rejeita a rota: ela é gerada no build, não por request.
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE}/sitemap.xml`,
  }
}
