'use client'

import { useCartStore } from '@/lib/cart-store'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Trash2, ShoppingBag, ArrowRight } from 'lucide-react'
import confetti from 'canvas-confetti'

export function CartDrawer() {
  const { items, isOpen, toggleCart, removeItem, updateQuantity, totalPrice } = useCartStore()

  const handleCheckout = () => {
    confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 } })
    alert("🎉 DEMO CHECKOUT SUCCESSFUL!\n\nThis would initiate Paystack / Flutterwave in production!")
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-black z-50"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-white shadow-2xl flex flex-col"
          >
            <div className="p-5 bg-gray-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-red-500" />
                <h2 className="font-bold text-lg">Your Cart</h2>
              </div>
              <button onClick={toggleCart} className="p-1 hover:bg-gray-800 rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {items.length === 0 ? (
                <div className="text-center py-20 text-gray-400">
                  <ShoppingBag className="w-12 h-12 mx-auto mb-3 opacity-30" />
                  <p>Your cart is empty</p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 items-center border-b pb-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-contain bg-gray-50 rounded-xl p-1" />
                    <div className="flex-1">
                      <h4 className="font-bold text-sm">{item.name}</h4>
                      <p className="text-red-600 font-bold text-sm">₦{item.price.toLocaleString()}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button onClick={() => updateQuantity(item.id, -1)} className="px-2 py-0.5 bg-gray-200 rounded text-xs">-</button>
                        <span className="text-xs font-bold">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="px-2 py-0.5 bg-gray-200 rounded text-xs">+</button>
                      </div>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-600">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-5 border-t bg-gray-50 space-y-4">
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total:</span>
                  <span className="text-red-600">₦{totalPrice().toLocaleString()}</span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg"
                >
                  Proceed to Checkout <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}