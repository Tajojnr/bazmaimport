import { notFound } from 'next/navigation'
import { PRODUCTS, getProductBySlug } from '@/data/products'
import { ProductDetail } from '@/components/shop/ProductDetail'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return { title: 'Product Not Found' }
  return {
    title: `${product.name} — ₦${product.price.toLocaleString()}`,
    description: product.description,
    openGraph: { images: [product.image] }
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()
  return <ProductDetail product={product} />
}