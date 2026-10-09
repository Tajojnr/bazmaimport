import type { Metadata } from 'next'
import { Smartphone, Code, Brain, Shield, Cloud, Headphones } from 'lucide-react'

export const metadata: Metadata = {
  title: 'IT Services — Software, AI, Blockchain',
  description: 'Beyond phone imports, Bazma Technologies offers custom software development, AI solutions, blockchain applications, and IT consulting.'
}

const SERVICES = [
  { icon: Smartphone, title: 'Phone Import & Export', desc: 'Direct sourcing of iPhones, Samsung, Google from China. Wholesale and retail.' },
  { icon: Code, title: 'Software Development', desc: 'Custom web applications, mobile apps tailored for African businesses.' },
  { icon: Brain, title: 'AI & Machine Learning', desc: 'AI chatbots, data analytics, predictive models for enterprises.' },
  { icon: Shield, title: 'Blockchain Solutions', desc: 'Smart contracts, DeFi platforms, and secure crypto payment integration.' },
  { icon: Cloud, title: 'Cloud Infrastructure', desc: 'AWS, Azure, GCP setup with DevOps automation.' },
  { icon: Headphones, title: 'IT Consulting', desc: 'Strategic guidance for digital transformation across industries.' }
]

export default function ServicesPage() {
  return (
    <>
      <section className="relative h-[400px] bg-black text-white flex items-center overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-50">
          <source src="/videos/sourcing-bg.mp4" type="video/mp4" />
        </video>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl font-bold">Our Services</h1>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Technology solutions beyond phone imports. From AI to Blockchain, we build the future.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <div key={s.title} className="bg-white border rounded-2xl p-8 hover:shadow-xl transition">
              <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-4">
                <s.icon className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}