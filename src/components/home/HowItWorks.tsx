import { ShoppingBag, CreditCard, Plane, PackageCheck, Home } from 'lucide-react'

const STEPS = [
  { icon: ShoppingBag, title: 'Browse & Order', desc: 'Choose your device online' },
  { icon: CreditCard, title: 'Make Payment', desc: 'Pay via Paystack, bank transfer, or crypto' },
  { icon: Plane, title: 'We Source in China', desc: 'Guangzhou team sources & verifies IMEI' },
  { icon: PackageCheck, title: 'Fast Air Cargo', desc: '7-14 days China ✈️ Nigeria shipping' },
  { icon: Home, title: 'Doorstep Delivery', desc: 'Delivered to your location nationwide' }
]

export function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-red-600 text-xs font-bold uppercase tracking-wider">Simple Process</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">How It Works</h2>
          <p className="text-gray-500 mt-2">From browse to doorstep in less than 2 weeks</p>
        </div>

        <div className="grid md:grid-cols-5 gap-6 relative">
          {STEPS.map((s, i) => (
            <div key={s.title} className="relative text-center">
              <div className="relative w-20 h-20 mx-auto mb-4 bg-red-50 text-red-600 rounded-full flex items-center justify-center">
                <s.icon className="w-9 h-9" />
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-bold text-sm mb-1">{s.title}</h3>
              <p className="text-xs text-gray-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}