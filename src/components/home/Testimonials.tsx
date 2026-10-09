import { Star } from 'lucide-react'

const REVIEWS = [
  {
    name: 'Aisha M.',
    location: 'Maiduguri, Borno',
    review: "Got my iPhone 16 Pro Max in 10 days. Factory sealed, 100% original! Bazma is the real deal.",
    img: '/social-proof/customer-1.webp'
  },
  {
    name: 'Chukwuemeka O.',
    location: 'Lagos',
    review: "Ordered 5 iPhones for my shop. Prices are unbeatable. Highly recommended for retailers.",
    img: '/social-proof/customer-2.webp'
  },
  {
    name: 'Fatima I.',
    location: 'Abuja FCT',
    review: "The chatbot answered all my questions. Customer service via WhatsApp was fast and friendly.",
    img: '/social-proof/customer-3.webp'
  }
]

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-red-600 text-xs font-bold uppercase tracking-wider">Customer Reviews</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">What Our Customers Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map((r) => (
            <div key={r.name} className="bg-slate-50 border rounded-2xl p-6 hover:shadow-lg transition">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4 leading-relaxed">"{r.review}"</p>
              <div className="flex items-center gap-3 pt-4 border-t">
                <img src={r.img} alt={r.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="font-bold text-sm">{r.name}</p>
                  <p className="text-xs text-gray-500">{r.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}