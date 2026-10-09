'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCartStore } from '@/lib/cart-store'
import { CheckCircle } from 'lucide-react'

export default function CheckoutPage() {
  const router = useRouter()
  const { items, totalPrice, clearCart } = useCartStore()
  const [step, setStep] = useState(1)
  const [processing, setProcessing] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setProcessing(true)
    setTimeout(() => {
      clearCart()
      router.push('/order-success')
    }, 2000)
  }

  if (items.length === 0 && !processing) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <a href="/shop" className="text-red-600 font-bold">← Continue Shopping</a>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-10 max-w-5xl">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <form onSubmit={handleSubmit} className="md:col-span-2 bg-white p-6 rounded-2xl border space-y-6">
          <section>
            <h2 className="font-bold text-lg mb-4">1. Shipping Information</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <input placeholder="Full Name" required className="border rounded-xl px-4 py-3" />
              <input placeholder="Phone (+234)" required className="border rounded-xl px-4 py-3" />
              <input placeholder="Email Address" type="email" required className="border rounded-xl px-4 py-3 md:col-span-2" />
              <input placeholder="Full Address" required className="border rounded-xl px-4 py-3 md:col-span-2" />
              <input placeholder="City" required className="border rounded-xl px-4 py-3" />
              <select required className="border rounded-xl px-4 py-3">
                <option value="">Select State</option>
                <option>Borno</option><option>Lagos</option><option>FCT Abuja</option>
                <option>Kano</option><option>Rivers</option><option>Oyo</option>
              </select>
            </div>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-4">2. Payment Method</h2>
            <div className="grid grid-cols-2 gap-3">
              {['Paystack', 'Flutterwave', 'Bank Transfer', 'USDT Crypto'].map((method) => (
                <label key={method} className="border rounded-xl p-4 cursor-pointer hover:border-red-500 flex items-center gap-2">
                  <input type="radio" name="payment" defaultChecked={method === 'Paystack'} />
                  <span className="font-medium">{method}</span>
                </label>
              ))}
            </div>
          </section>

          <button
            type="submit"
            disabled={processing}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl disabled:opacity-50"
          >
            {processing ? 'Processing Order...' : `Pay ₦${totalPrice().toLocaleString()}`}
          </button>
        </form>

        <aside className="bg-gray-50 p-6 rounded-2xl border h-fit sticky top-24">
          <h3 className="font-bold mb-4">Order Summary</h3>
          <div className="space-y-3 mb-4">
            {items.map((i) => (
              <div key={i.id} className="flex gap-3 text-sm">
                <img src={i.image} className="w-14 h-14 object-contain bg-white rounded-lg p-1" alt={i.name} />
                <div className="flex-1">
                  <p className="font-medium leading-tight">{i.name}</p>
                  <p className="text-xs text-gray-500">x{i.quantity}</p>
                </div>
                <span className="font-bold text-red-600">₦{(i.price * i.quantity).toLocaleString()}</span>
              </div>
            ))}
          </div>
          <div className="border-t pt-3 flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span className="text-red-600">₦{totalPrice().toLocaleString()}</span>
          </div>
        </aside>
      </div>
    </div>
  )
}