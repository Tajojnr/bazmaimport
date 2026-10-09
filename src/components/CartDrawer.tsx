'use client'

import { useRouter } from 'next/navigation'
import { useCartStore } from '@/lib/cart-store'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Trash2, ShoppingBag, ArrowRight } from 'lucide-react'

export function CartDrawer() {
  const router = useRouter()
  const { items, isOpen, toggleCart, closeCart, removeItem, updateQuantity, totalPrice } = useCartStore()

  const handleCheckout = () => {
    closeCart()
    router.push('/checkout')
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
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-red-500" />
                <h2 className="font-bold text-base">Your Cart</h2>
              </div>
              <button onClick={toggleCart} className="p-1 hover:bg-slate-800 rounded-full text-slate-300">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {items.length === 0 ? (
                <div className="text-center py-20 text-slate-400">
                  <ShoppingBag className="w-12 h-12 mx-auto mb-3 opacity-30" />
                  <p className="text-sm">Your cart is empty</p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-3 items-center border-b border-slate-100 pb-3">
                    <img src={item.image} alt={item.name} className="w-14 h-14 object-contain bg-slate-50 rounded-lg p-1 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-xs text-slate-900 truncate">{item.name}</h4>
                      <p className="text-red-600 font-bold text-xs mt-0.5">₦{item.price.toLocaleString()}</p>
                      <div className="flex items-center gap-2 mt-1.5">
                        <button onClick={() => updateQuantity(item.id, -1)} className="w-5 h-5 bg-slate-100 text-slate-700 rounded flex items-center justify-center text-xs font-bold">-</button>
                        <span className="text-xs font-bold text-slate-800">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="w-5 h-5 bg-slate-100 text-slate-700 rounded flex items-center justify-center text-xs font-bold">+</button>
                      </div>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="text-slate-400 hover:text-red-600 p-1">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-4 border-t border-slate-100 bg-slate-50 space-y-3">
                <div className="flex justify-between items-center text-base font-bold text-slate-900">
                  <span>Total Amount:</span>
                  <span className="text-red-600 text-lg">₦{totalPrice().toLocaleString()}</span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm shadow-md shadow-red-600/20 active:scale-95 transition"
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