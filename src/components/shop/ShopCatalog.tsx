'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { ShoppingBag, Filter } from 'lucide-react'
import { PRODUCTS } from '@/data/products'
import { useCartStore } from '@/lib/cart-store'
import confetti from 'canvas-confetti'

const BRANDS = ['All', 'Apple', 'Samsung', 'Google', 'Accessory']

export function ShopCatalog() {
  const [filterBrand, setFilterBrand] = useState('All')
  const [sortBy, setSortBy] = useState('featured')
  const { addItem } = useCartStore()

  const filtered = useMemo(() => {
    let list = filterBrand === 'All' ? PRODUCTS : PRODUCTS.filter((p) => p.brand === filterBrand)
    if (sortBy === 'low-high') list = [...list].sort((a, b) => a.price - b.price)
    if (sortBy === 'high-low') list = [...list].sort((a, b) => b.price - a.price)
    return list
  }, [filterBrand, sortBy])

  const handleAdd = (p: any) => {
    addItem({ id: p.id, name: p.name, price: p.price, image: p.image })
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } })
  }

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 p-4 bg-white rounded-2xl border">
        <div className="flex items-center gap-2 flex-wrap">
          <Filter className="w-4 h-4 text-gray-500" />
          {BRANDS.map((b) => (
            <button
              key={b}
              onClick={() => setFilterBrand(b)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                filterBrand === b
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {b}
            </button>
          ))}
        </div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <option value="featured">Featured</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
        </select>
      </div>

      {/* Product Count */}
      <p className="text-sm text-gray-500 mb-4">
        Showing <strong>{filtered.length}</strong> of {PRODUCTS.length} products
      </p>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((p) => (
          <div key={p.id} className="bg-white rounded-2xl border overflow-hidden hover:shadow-xl transition group">
            <Link href={`/shop/${p.slug}`} className="block relative aspect-square bg-gray-50 p-4">
              {p.badge && (
                <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full z-10">
                  {p.badge}
                </span>
              )}
              {p.stock <= 5 && (
                <span className="absolute top-3 right-3 bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-full z-10">
                  Only {p.stock} left
                </span>
              )}
              <img src={p.image} alt={p.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
            </Link>
            <div className="p-4">
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">{p.brand}</p>
              <Link href={`/shop/${p.slug}`}>
                <h3 className="font-bold text-sm mt-1 mb-2 line-clamp-2 min-h-[40px] hover:text-red-600 transition">{p.name}</h3>
              </Link>
              <div className="flex items-center justify-between mt-3">
                <div>
                  <p className="text-base font-bold text-red-600">₦{p.price.toLocaleString()}</p>
                  {p.originalPrice && (
                    <p className="text-[10px] text-gray-400 line-through">₦{p.originalPrice.toLocaleString()}</p>
                  )}
                </div>
                <button
                  onClick={() => handleAdd(p)}
                  className="bg-red-600 hover:bg-red-700 text-white p-2.5 rounded-xl transition"
                >
                  <ShoppingBag className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          <p>No products found in this category.</p>
        </div>
      )}
    </div>
  )
}