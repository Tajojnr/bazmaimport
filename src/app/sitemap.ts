import { MetadataRoute } from 'next'
import { PRODUCTS } from '@/data/products'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://bazmatechnologies.ng'
  const staticPages = ['', '/shop', '/track', '/about', '/services', '/contact'].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8
  }))
  const productPages = PRODUCTS.map((p) => ({
    url: `${base}/shop/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7
  }))
  return [...staticPages, ...productPages]
}