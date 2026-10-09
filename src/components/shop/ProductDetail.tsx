'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingBag, Heart, Share2, ShieldCheck, Truck, Phone, Minus, Plus } from 'lucide-react'
import { useCartStore } from '@/lib/cart-store'
import { Product } from '@/data/products'
import confetti from 'canvas-confetti'

export function ProductDetail({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCartStore()

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({ id: product.id, name: product.name, price: product.price, image: product.image })
    }
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } })
  }

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-red-600">Home</Link> / {' '}
        <Link href="/shop" className="hover:text-red-600">Shop</Link> / {' '}
        <span className="text-gray-900 font-medium">{product.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Image */}
        <div className="bg-gray-50 rounded-3xl p-8 flex items-center justify-center aspect-square relative">
          {product.badge && (
            <span className="absolute top-6 left-6 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
              {product.badge}
            </span>
          )}
          <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain" />
        </div>

        {/* Info */}
        <div>
          <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-2">{product.brand} • {product.category}</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>

          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-4xl font-bold text-red-600">₦{product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <>
                <span className="text-lg text-gray-400 line-through">₦{product.originalPrice.toLocaleString()}</span>
                <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded font-bold">
                  SAVE ₦{(product.originalPrice - product.price).toLocaleString()}
                </span>
              </>
            )}
          </div>

          <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

          {/* Features */}
          <div className="mb-6">
            <h3 className="font-bold mb-3 text-sm uppercase text-gray-700">Key Features</h3>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {product.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Specs */}
          <div className="mb-8 bg-gray-50 rounded-2xl p-5">
            <h3 className="font-bold mb-3 text-sm uppercase text-gray-700">Specifications</h3>
            <dl className="grid grid-cols-2 gap-3 text-sm">
              {Object.entries(product.specs).map(([k, v]) => (
                <div key={k}>
                  <dt className="text-xs text-gray-500 uppercase">{k}</dt>
                  <dd className="font-medium">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Qty + Add */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border rounded-xl overflow-hidden">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:bg-gray-100">
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-4 font-bold w-12 text-center">{quantity}</span>
              <button onClick={() => setQuantity(Math.min(product.stock, quantity + 1))} className="p-3 hover:bg-gray-100">
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <button onClick={handleAdd} className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg">
              <ShoppingBag className="w-5 h-5" /> Add to Cart
            </button>
          </div>

          <a href="https://wa.me/2348069568916" target="_blank" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 mb-6">
            <Phone className="w-4 h-4" /> Order via WhatsApp
          </a>

          {/* Trust Row */}
          <div className="grid grid-cols-2 gap-3 pt-6 border-t">
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <ShieldCheck className="w-5 h-5 text-green-600" />
              <span>Factory Sealed & Original</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <Truck className="w-5 h-5 text-blue-600" />
              <span>7-14 Days Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}