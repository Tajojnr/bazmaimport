'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ShoppingBag, CheckCircle2 } from 'lucide-react'
import { PRODUCTS } from '@/data/products'
import { useCartStore } from '@/lib/cart-store'
import confetti from 'canvas-confetti'

const BRANDS = ['All Devices', 'Apple', 'Samsung', 'Google', 'Accessory']

export function FeaturedProducts() {
  const [activeBrand, setActiveBrand] = useState('All Devices')
  const { addItem } = useCartStore()

  const displayedProducts = activeBrand === 'All Devices' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.brand === activeBrand)

  const handleAdd = (p: typeof PRODUCTS[0]) => {
    addItem({ id: p.id, name: p.name, price: p.price, image: p.image })
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } })
  }

  return (
    <section id="inventory" className="py-12 md:py-20 bg-slate-50">
      <div className="container mx-auto px-3 sm:px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 md:mb-10">
          <span className="bg-red-100 text-red-600 text-[10px] md:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-2 md:mb-3">
            Guangzhou Sourced Inventory
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight">Complete Flagship Catalog</h2>
          <p className="text-gray-500 mt-1 md:mt-2 text-xs sm:text-sm md:text-base px-2">
            All devices are 100% factory sealed, IMEI verified, and available for immediate shipping.
          </p>
        </div>

        {/* Brand Filter Tabs - Horizontally scrollable on mobile */}
        <div className="flex overflow-x-auto sm:flex-wrap justify-start sm:justify-center gap-1.5 md:gap-2 mb-6 md:mb-10 pb-2 sm:pb-0 scrollbar-none -mx-3 px-3 sm:mx-0 sm:px-0">
          {BRANDS.map((brand) => (
            <button
              key={brand}
              onClick={() => setActiveBrand(brand)}
              className={`px-3.5 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-bold whitespace-nowrap transition-all shrink-0 ${
                activeBrand === brand
                  ? 'bg-red-600 text-white shadow-md shadow-red-600/20 scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {brand} {brand === 'All Devices' ? `(${PRODUCTS.length})` : ''}
            </button>
          ))}
        </div>

        {/* Product Grid - 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-6">
          {displayedProducts.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-xl md:rounded-2xl border overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <Link href={`/shop/${p.slug}`} className="block relative aspect-square bg-gray-50/60 p-3 sm:p-4 md:p-6">
                  {p.badge && (
                    <span className="absolute top-2 left-2 md:top-3 md:left-3 bg-red-600 text-white text-[9px] md:text-[10px] font-bold px-2 py-0.5 md:px-2.5 md:py-1 rounded-full z-10 shadow-sm">
                      {p.badge}
                    </span>
                  )}
                  {p.stock <= 10 && (
                    <span className="absolute top-2 right-2 md:top-3 md:right-3 bg-orange-500 text-white text-[9px] md:text-[10px] font-bold px-1.5 py-0.5 md:px-2 rounded-full z-10 hidden sm:inline-block">
                      {p.stock} units left
                    </span>
                  )}
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>

                {/* Content */}
                <div className="p-2.5 sm:p-4 md:p-5">
                  <div className="flex justify-between items-center text-[9px] md:text-[10px] text-gray-400 font-bold uppercase mb-1">
                    <span>{p.brand}</span>
                    <span className="text-green-600 flex items-center gap-0.5 md:gap-1">
                      <CheckCircle2 className="w-2.5 h-2.5 md:w-3 md:h-3" /> Sealed
                    </span>
                  </div>

                  <Link href={`/shop/${p.slug}`}>
                    <h3 className="font-bold text-xs sm:text-sm md:text-base mt-0.5 mb-1 md:mb-2 line-clamp-2 min-h-[32px] sm:min-h-[40px] md:min-h-[44px] hover:text-red-600 transition leading-snug">
                      {p.name}
                    </h3>
                  </Link>

                  <p className="text-[11px] md:text-xs text-gray-500 line-clamp-2 mb-2 md:mb-4 leading-relaxed hidden sm:block">
                    {p.description}
                  </p>
                </div>
              </div>

              {/* Price & Add to Cart */}
              <div className="p-2.5 sm:p-4 md:p-5 pt-0 border-t border-gray-100 mt-1 md:mt-2">
                <div className="flex items-center justify-between pt-2 md:pt-3">
                  <div>
                    <p className="text-xs sm:text-base md:text-lg font-bold text-red-600 tracking-tight">
                      ₦{p.price.toLocaleString()}
                    </p>
                    {p.originalPrice && (
                      <p className="text-[9px] md:text-xs text-gray-400 line-through">
                        ₦{p.originalPrice.toLocaleString()}
                      </p>
                    )}
                  </div>

                  <button
                    onClick={() => handleAdd(p)}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold px-2.5 sm:px-3 md:px-4 py-1.5 md:py-2.5 rounded-lg md:rounded-xl flex items-center gap-1 md:gap-2 text-[11px] md:text-xs transition-transform active:scale-95 shadow-md shadow-red-600/20"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    <span className="hidden sm:inline">Add</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Wholesale CTA Bar */}
        <div className="mt-8 md:mt-12 bg-gradient-to-r from-gray-900 to-black text-white rounded-xl md:rounded-2xl p-5 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 border border-gray-800 text-center md:text-left">
          <div>
            <span className="text-red-500 font-bold text-[10px] md:text-xs uppercase tracking-wider">Bulk Buyers & Dealers</span>
            <h3 className="text-lg md:text-2xl font-bold mt-1">Need 5+ units for your store?</h3>
            <p className="text-gray-400 text-xs md:text-sm mt-1">Get custom wholesale pricing and priority air cargo shipping directly to your state.</p>
          </div>
          <a
            href="https://wa.me/2348069568916?text=Hi%20Bazma,%20I'm%20interested%20in%20a%20wholesale%20bulk%20quote"
            target="_blank"
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-5 md:px-6 py-3 md:py-3.5 rounded-xl whitespace-nowrap text-xs md:text-sm flex items-center justify-center gap-2 w-full md:w-auto"
          >
            Request Bulk Quote →
          </a>
        </div>
      </div>
    </section>
  )
}