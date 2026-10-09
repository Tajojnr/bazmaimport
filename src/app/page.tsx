import type { Metadata } from 'next'
import { HomeHero } from '@/components/home/HomeHero'
import { TrustBadges } from '@/components/home/TrustBadges'
import { FeaturedProducts } from '@/components/home/FeaturedProducts'
import { HowItWorks } from '@/components/home/HowItWorks'
import { BrandStory } from '@/components/home/BrandStory'
import { Testimonials } from '@/components/home/Testimonials'
import { CTABanner } from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'Home — Original iPhones Direct from China to Nigeria',
  description:
    'Shop 100% genuine iPhones, Samsung Galaxy, and Google Pixel. Bazma Technologies imports factory-sealed devices from Guangzhou to Maiduguri and across Nigeria.',
}

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustBadges />
      <FeaturedProducts />
      <HowItWorks />
      <BrandStory />
      <Testimonials />
      <CTABanner />
    </>
  )
}