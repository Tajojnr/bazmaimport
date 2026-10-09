import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us — Founded 2024 in Maiduguri',
  description: 'Bazma Technologies Nig Ltd was founded in 2024 in Maiduguri, Borno State, with sourcing operations in Guangzhou, China.'
}

export default function AboutPage() {
  return (
    <>
      {/* Hero with Logistics Video */}
      <section className="relative h-[500px] bg-black text-white flex items-center overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-50">
          <source src="/videos/logistics-bg.mp4" type="video/mp4" />
        </video>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">OUR STORY</span>
          <h1 className="text-5xl font-bold mt-4 mb-4">More Than Just Phones.<br />We Deliver Trust.</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Founded in 2024, headquartered in Maiduguri with sourcing operations in Guangzhou, China.
          </p>
        </div>
      </section>

      {/* Story Grid */}
      <section className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <img src="/company/maiduguri-hq.webp" alt="Maiduguri HQ" className="rounded-2xl shadow-xl" />
        <div>
          <span className="text-red-600 text-xs font-bold uppercase">Nigerian Headquarters</span>
          <h2 className="text-3xl font-bold mt-2 mb-4">Maiduguri, Borno State</h2>
          <p className="text-gray-600 mb-4">
            Our Maiduguri headquarters is the heart of our operations in Nigeria. Here, we manage customer support, logistics coordination, and nationwide distribution.
          </p>
          <p className="text-gray-600">
            From Borno State, we serve customers across all 36 states of Nigeria with real-time tracking and dedicated support.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <span className="text-red-600 text-xs font-bold uppercase">Sourcing Hub</span>
            <h2 className="text-3xl font-bold mt-2 mb-4">Guangzhou, China 🇨🇳</h2>
            <p className="text-gray-600 mb-4">
              Our Guangzhou team sources original Apple, Samsung, and Google devices directly from authorized channels in China.
            </p>
            <p className="text-gray-600">
              Every device undergoes IMEI verification and quality checks before shipping to Nigeria.
            </p>
          </div>
          <img src="/company/guangzhou-office.webp" alt="Guangzhou Office" className="rounded-2xl shadow-xl order-1 md:order-2" />
        </div>
      </section>

      {/* CAC Certificate */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Officially Registered</h2>
        <p className="text-gray-600 mb-8">Verified by the Corporate Affairs Commission of Nigeria</p>
        <img src="/company/cac-certificate.webp" alt="CAC Certificate" className="max-w-2xl mx-auto rounded-2xl shadow-xl" />
      </section>

      {/* CTA */}
      <section className="bg-red-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to shop with confidence?</h2>
        <Link href="/shop" className="inline-block bg-white text-red-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-100">
          Browse All Devices →
        </Link>
      </section>
    </>
  )
}