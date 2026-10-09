import { ShieldCheck, Truck, Headphones, Globe } from 'lucide-react'

const BADGES = [
  { icon: ShieldCheck, title: '100% Genuine', desc: 'Factory sealed, IMEI verified', color: 'red' },
  { icon: Truck, title: 'China ✈️ Nigeria', desc: '7-14 days air cargo', color: 'blue' },
  { icon: Headphones, title: 'Dedicated Support', desc: '24/7 WhatsApp', color: 'purple' },
  { icon: Globe, title: 'Nationwide Delivery', desc: 'All 36 Nigerian states', color: 'green' }
]

export function TrustBadges() {
  return (
    <section className="py-10 bg-white border-b">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
        {BADGES.map((b) => (
          <div key={b.title} className="flex items-center gap-4">
            <div className={`w-14 h-14 bg-${b.color}-50 text-${b.color}-600 rounded-2xl flex items-center justify-center shrink-0`}>
              <b.icon className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-bold text-sm">{b.title}</h4>
              <p className="text-xs text-gray-500">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}