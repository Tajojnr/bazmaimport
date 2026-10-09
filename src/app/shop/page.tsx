import type { Metadata } from 'next'
import { ShopCatalog } from '@/components/shop/ShopCatalog'

export const metadata: Metadata = {
  title: 'Shop All Phones — iPhones, Samsung, Google Pixel',
  description: 'Browse our complete inventory of original iPhones, Samsung Galaxy S25 Ultra, Google Pixel, AirPods, and Apple Watch Ultra. All factory sealed and shipped from China.'
}

export default function ShopPage() {
  return (
    <div className="container mx-auto px-3 sm:px-4 py-6 md:py-10">
      <div className="mb-6 md:mb-10 text-center max-w-2xl mx-auto">
        <span className="bg-red-100 text-red-700 text-[10px] md:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-2">
          Guangzhou Sourced Catalog
        </span>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
          Shop All Devices
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
          100% Factory Sealed • IMEI Verified • Shipped Direct from Guangzhou
        </p>
      </div>
      <ShopCatalog />
    </div>
  )
}