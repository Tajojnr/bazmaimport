'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { ShoppingBag, Filter, CheckCircle2, Search } from 'lucide-react'
import { PRODUCTS } from '@/data/products'
import { useCartStore } from '@/lib/cart-store'
import confetti from 'canvas-confetti'

const BRANDS = ['All', 'Apple', 'Samsung', 'Google', 'Accessory']

export function ShopCatalog() {
  const [filterBrand, setFilterBrand] = useState('All')
  const [sortBy, setSortBy] = useState('featured')
  const [searchQuery, setSearchQuery] = useState('')
  const { addItem } = useCartStore()

  const filtered = useMemo(() => {
    let list = PRODUCTS

    if (filterBrand !== 'All') {
      list = list.filter((p) => p.brand === filterBrand)
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      list = list.filter((p) => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q))
    }

    if (sortBy === 'low-high') list = [...list].sort((a, b) => a.price - b.price)
    if (sortBy === 'high-low') list = [...list].sort((a, b) => b.price - a.price)

    return list
  }, [filterBrand, sortBy, searchQuery])

  const handleAdd = (p: typeof PRODUCTS[0]) => {
    addItem({ id: p.id, name: p.name, price: p.price, image: p.image })
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } })
  }

  return (
    <div className="w-full max-w-full overflow-x-hidden">
      {/* Header Search & Control Bar */}
      <div className="bg-white rounded-xl border border-slate-200 p-3 md:p-4 mb-5 space-y-3 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-2.5 sm:items-center justify-between">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search iPhones, Samsung, Pixel..."
              className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-xs md:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-2">
            <span className="text-[11px] text-slate-500 font-semibold sm:hidden">
              {filtered.length} items
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-slate-50 border border-slate-200 text-slate-800 rounded-lg px-2.5 py-1.5 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="featured">Featured</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Scrollable Brand Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pt-1 -mx-1 px-1">
          <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0 mr-1 hidden sm:block" />
          {BRANDS.map((b) => (
            <button
              key={b}
              onClick={() => setFilterBrand(b)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all shrink-0 ${
                filterBrand === b
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {b} {b === 'All' ? `(${PRODUCTS.length})` : ''}
            </button>
          ))}
        </div>
      </div>

      {/* 2-Column Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4">
        {filtered.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition flex flex-col justify-between"
          >
            <div>
              <Link href={`/shop/${p.slug}`} className="block relative aspect-square bg-slate-50 p-2 sm:p-4">
                {p.badge && (
                  <span className="absolute top-2 left-2 bg-red-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded z-10">
                    {p.badge}
                  </span>
                )}
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-contain"
                />
              </Link>

              <div className="p-2.5 sm:p-4">
                <div className="flex justify-between items-center text-[9px] text-slate-500 font-extrabold uppercase mb-1">
                  <span>{p.brand}</span>
                  <span className="text-green-700 flex items-center gap-0.5 font-bold">
                    <CheckCircle2 className="w-2.5 h-2.5" /> Sealed
                  </span>
                </div>

                <Link href={`/shop/${p.slug}`}>
                  <h3 className="font-bold text-xs sm:text-sm text-slate-900 line-clamp-2 min-h-[32px] sm:min-h-[40px] hover:text-red-600 transition leading-snug">
                    {p.name}
                  </h3>
                </Link>
              </div>
            </div>

            <div className="p-2.5 sm:p-4 pt-0 border-t border-slate-100 mt-1">
              <div className="flex items-center justify-between pt-2">
                <div>
                  <p className="text-xs sm:text-base font-black text-red-600 tracking-tight">
                    ₦{p.price.toLocaleString()}
                  </p>
                </div>

                <button
                  onClick={() => handleAdd(p)}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg text-[11px] sm:text-xs flex items-center gap-1 active:scale-95 transition"
                >
                  <ShoppingBag className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span className="hidden sm:inline">Add</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}