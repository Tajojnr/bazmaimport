'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCartStore } from '@/lib/cart-store'
import { Lock, ArrowRight, ShieldCheck } from 'lucide-react'
import confetti from 'canvas-confetti'

export default function CheckoutPage() {
  const router = useRouter()
  const { items, totalPrice, clearCart } = useCartStore()
  const [processing, setProcessing] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState('Paystack')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setProcessing(true)

    // Generate unique order/tracking number
    const generatedOrderNo = `BZM-2024-${Math.floor(10000 + Math.random() * 90000)}`

    setTimeout(() => {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } })
      clearCart()
      router.push(`/order-success?orderNo=${generatedOrderNo}`)
    }, 1500)
  }

  if (items.length === 0 && !processing) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4 text-slate-900">Your cart is empty</h1>
        <a href="/shop" className="bg-red-600 text-white font-bold px-6 py-3 rounded-xl inline-block text-sm">
          ← Browse Inventory
        </a>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-3 sm:px-4 py-6 md:py-10 max-w-5xl">
      <div className="mb-6 flex items-center gap-2 text-xs text-slate-500 font-semibold">
        <span>Cart</span> → <span className="text-red-600 font-bold">Checkout</span> → <span>Order Confirmation</span>
      </div>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        <form onSubmit={handleSubmit} className="md:col-span-2 bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 space-y-6 shadow-sm">
          <section>
            <h2 className="font-bold text-base md:text-lg mb-3 text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs">1</span>
              Delivery Details
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <input placeholder="Full Name *" required className="border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:ring-2 focus:ring-red-500 outline-none" />
              <input placeholder="Phone Number (+234) *" required className="border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:ring-2 focus:ring-red-500 outline-none" />
              <input placeholder="Email Address *" type="email" required className="border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 sm:col-span-2 focus:ring-2 focus:ring-red-500 outline-none" />
              <input placeholder="Street Address *" required className="border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 sm:col-span-2 focus:ring-2 focus:ring-red-500 outline-none" />
              <input placeholder="City *" required className="border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:ring-2 focus:ring-red-500 outline-none" />
              <select required className="border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:ring-2 focus:ring-red-500 outline-none">
                <option value="">Select State *</option>
                <option>Borno (Maiduguri HQ)</option><option>Lagos</option><option>FCT Abuja</option>
                <option>Kano</option><option>Rivers</option><option>Oyo</option><option>Enugu</option><option>Delta</option>
              </select>
            </div>
          </section>

          <section>
            <h2 className="font-bold text-base md:text-lg mb-3 text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs">2</span>
              Payment Option
            </h2>
            <div className="grid grid-cols-2 gap-2.5">
              {[
                { name: 'Paystack', label: 'Debit / Credit Card' },
                { name: 'Flutterwave', label: 'African Cards & Mobile' },
                { name: 'Bank Transfer', label: 'Direct Transfer' },
                { name: 'USDT Crypto', label: 'Crypto Payment' }
              ].map((method) => (
                <label
                  key={method.name}
                  onClick={() => setPaymentMethod(method.name)}
                  className={`border rounded-xl p-3 cursor-pointer transition flex flex-col justify-between ${
                    paymentMethod === method.name ? 'border-red-600 bg-red-50/50 ring-1 ring-red-600' : 'border-slate-200 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-slate-900">{method.name}</span>
                    <input type="radio" name="payment" checked={paymentMethod === method.name} readOnly />
                  </div>
                  <span className="text-[10px] text-slate-500 mt-1">{method.label}</span>
                </label>
              ))}
            </div>
          </section>

          <button
            type="submit"
            disabled={processing}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 md:py-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow-md shadow-red-600/20 disabled:opacity-50 active:scale-95 transition"
          >
            {processing ? (
              <span>Generating Order &amp; Tracking ID...</span>
            ) : (
              <>
                <Lock className="w-4 h-4" /> Place Order (₦{totalPrice().toLocaleString()})
              </>
            )}
          </button>
        </form>

        <aside className="bg-slate-50 p-4 sm:p-6 rounded-2xl border border-slate-200 h-fit space-y-4">
          <h3 className="font-bold text-sm md:text-base text-slate-900 border-b border-slate-200 pb-3">Order Summary</h3>
          <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
            {items.map((i) => (
              <div key={i.id} className="flex gap-3 text-xs">
                <img src={i.image} className="w-12 h-12 object-contain bg-white rounded-lg p-1 border border-slate-200 shrink-0" alt={i.name} />
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-slate-900 truncate">{i.name}</p>
                  <p className="text-[10px] text-slate-500">Qty: {i.quantity}</p>
                </div>
                <span className="font-bold text-red-600">₦{(i.price * i.quantity).toLocaleString()}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-200 pt-3 space-y-1.5 text-xs text-slate-600">
            <div className="flex justify-between"><span>Subtotal:</span><span className="font-bold text-slate-900">₦{totalPrice().toLocaleString()}</span></div>
            <div className="flex justify-between"><span>Air Cargo Shipping:</span><span className="text-green-600 font-bold">FREE</span></div>
          </div>

          <div className="border-t border-slate-200 pt-3 flex justify-between font-extrabold text-base text-slate-900">
            <span>Total:</span>
            <span className="text-red-600 text-lg">₦{totalPrice().toLocaleString()}</span>
          </div>

          <div className="bg-white p-3 rounded-xl border border-slate-200 text-[11px] text-slate-600 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-green-600 shrink-0" />
            <span>Guangzhou Air Cargo Shipping to Nigeria Included</span>
          </div>
        </aside>
      </div>
    </div>
  )
}