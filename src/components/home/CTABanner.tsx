import Link from 'next/link'
import { MessageCircle, ShoppingBag } from 'lucide-react'

export function CTABanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-red-600 to-red-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready To Buy Your Dream Phone?</h2>
        <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
          Join 500+ satisfied customers nationwide. Original devices, guaranteed delivery, dedicated support.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/shop" className="bg-white text-red-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" /> Shop Now
          </Link>
          <a
            href="https://wa.me/2348069568916"
            target="_blank"
            className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" /> WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  )
}