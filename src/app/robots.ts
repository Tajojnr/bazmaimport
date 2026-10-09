import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/checkout', '/order-success']
    },
    sitemap: 'https://bazmatechnologies.ng/sitemap.xml'
  }
}