import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

export function BrandStory() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-red-600 text-xs font-bold uppercase tracking-wider">Our Story</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Founded in <span className="text-red-600">2024</span>, Built on <span className="text-red-600">Trust</span>
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Headquartered in Maiduguri, Borno State, with sourcing operations in Guangzhou, China. 
            Bazma Technologies Nig Ltd specializes in importing original Apple, Samsung, and Google devices.
          </p>
          <div className="space-y-3 mb-6">
            {[
              'CAC Registered: RC-7492014',
              '51-200 Employees across Nigeria & China',
              'Direct sourcing from authorized channels',
              'Full warranty and after-sales support'
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <Link href="/about" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl">
            Learn More About Us →
          </Link>
        </div>
        <div className="relative">
          <img src="/company/maiduguri-hq.webp" alt="Bazma Maiduguri HQ" className="rounded-2xl shadow-2xl w-full" />
          <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border max-w-xs">
            <p className="text-xs text-gray-500 uppercase font-bold">TikTok Verified</p>
            <p className="text-base font-bold">@_elzubs</p>
            <p className="text-xs text-gray-500">3,118 followers • 8,010 likes</p>
          </div>
        </div>
      </div>
    </section>
  )
}