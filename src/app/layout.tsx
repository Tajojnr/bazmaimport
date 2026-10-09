import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { BazmaChatbot } from '@/components/BazmaChatbot'
import { CartDrawer } from '@/components/CartDrawer'

export const metadata: Metadata = {
  metadataBase: new URL('https://bazmatechnologies.ng'),
  title: {
    default: 'Bazma Technologies Nig Ltd — Original iPhones Direct from China',
    template: '%s | Bazma Technologies'
  },
  description:
    'Nigeria\'s most trusted import/export company for genuine Apple iPhones, Samsung Galaxy, and Google Pixel devices. Founded 2024, based in Maiduguri with Guangzhou China operations.',
  keywords: [
    'buy iphone nigeria',
    'original iphone maiduguri',
    'iphone import nigeria',
    'bazma technologies',
    'apple nigeria wholesale',
    'samsung galaxy nigeria',
    'genuine phones borno'
  ],
  authors: [{ name: 'Bazma Technologies Nig Ltd' }],
  openGraph: {
    title: 'Bazma Technologies Nig Ltd',
    description: 'Original iPhones Direct from China to Nigeria. More Than Just Phones... We Deliver Trust.',
    url: 'https://bazmatechnologies.ng',
    siteName: 'Bazma Technologies',
    images: [{ url: '/og-preview.webp', width: 1200, height: 630 }],
    locale: 'en_NG',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bazma Technologies Nig Ltd',
    description: 'Original iPhones Direct from China to Nigeria.',
    images: ['/og-preview.webp']
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BazmaChatbot />
        <CartDrawer />
      </body>
    </html>
  )
}