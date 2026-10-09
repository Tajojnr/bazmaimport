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
    confetti({ particleCount: 60, spread: 60, origin: { y: 0.8 } })
  }

  return (
    <section id="inventory" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
            Guangzhou Sourced Inventory
          </span>
          <h2 className="text-3xl md:text-5xl font-bold">Complete Flagship Catalog</h2>
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            All devices are 100% factory sealed, IMEI verified, and available for immediate shipping.
          </p>
        </div>

        {/* Brand Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {BRANDS.map((brand) => (
            <button
              key={brand}
              onClick={() => setActiveBrand(brand)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                activeBrand === brand
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border'
              }`}
            >
              {brand} {brand === 'All Devices' ? `(${PRODUCTS.length})` : ''}
            </button>
          ))}
        </div>

        {/* All Products Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedProducts.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl border overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <Link href={`/shop/${p.slug}`} className="block relative aspect-square bg-gray-50 p-6">
                  {p.badge && (
                    <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full z-10 shadow-sm">
                      {p.badge}
                    </span>
                  )}
                  {p.stock <= 10 && (
                    <span className="absolute top-3 right-3 bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-10">
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
                <div className="p-5">
                  <div className="flex justify-between items-center text-[10px] text-gray-400 font-bold uppercase mb-1">
                    <span>{p.brand}</span>
                    <span className="text-green-600 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Sealed
                    </span>
                  </div>

                  <Link href={`/shop/${p.slug}`}>
                    <h3 className="font-bold text-sm md:text-base mt-1 mb-2 line-clamp-2 min-h-[44px] hover:text-red-600 transition">
                      {p.name}
                    </h3>
                  </Link>

                  <p className="text-xs text-gray-500 line-clamp-2 mb-4 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>

              {/* Price & Add to Cart */}
              <div className="p-5 pt-0 border-t border-gray-100 mt-2">
                <div className="flex items-center justify-between pt-3">
                  <div>
                    <p className="text-lg font-bold text-red-600">
                      ₦{p.price.toLocaleString()}
                    </p>
                    {p.originalPrice && (
                      <p className="text-xs text-gray-400 line-through">
                        ₦{p.originalPrice.toLocaleString()}
                      </p>
                    )}
                  </div>

                  <button
                    onClick={() => handleAdd(p)}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2.5 rounded-xl flex items-center gap-2 text-xs transition-transform active:scale-95 shadow-md shadow-red-600/20"
                  >
                    <ShoppingBag className="w-4 h-4" /> Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Wholesale CTA Bar */}
        <div className="mt-12 bg-gradient-to-r from-gray-900 to-black text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-800">
          <div>
            <span className="text-red-500 font-bold text-xs uppercase tracking-wider">Bulk Buyers & Dealers</span>
            <h3 className="text-2xl font-bold mt-1">Need 5+ units for your store?</h3>
            <p className="text-gray-400 text-sm mt-1">Get custom wholesale pricing and priority air cargo shipping directly to your state.</p>
          </div>
          <a
            href="https://wa.me/2348069568916?text=Hi%20Bazma,%20I'm%20interested%20in%20a%20wholesale%20bulk%20quote"
            target="_blank"
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3.5 rounded-xl whitespace-nowrap text-sm flex items-center gap-2"
          >
            Request Bulk Quote →
          </a>
        </div>
      </div>
    </section>
  )
}