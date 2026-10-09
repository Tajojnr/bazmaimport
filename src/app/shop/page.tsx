import type { Metadata } from 'next'
import { ShopCatalog } from '@/components/shop/ShopCatalog'

export const metadata: Metadata = {
  title: 'Shop All Phones — iPhones, Samsung, Google Pixel',
  description: 'Browse our complete inventory of original iPhones, Samsung Galaxy S25 Ultra, Google Pixel, AirPods, and Apple Watch Ultra. All factory sealed and shipped from China.'
}

export default function ShopPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-2">Shop All Devices</h1>
        <p className="text-gray-500">Original. Factory sealed. Delivered from Guangzhou to your doorstep.</p>
      </div>
      <ShopCatalog />
    </div>
  )
}