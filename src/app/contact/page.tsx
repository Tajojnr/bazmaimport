import type { Metadata } from 'next'
import { ContactForm } from '@/components/shared/ContactForm'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Reach Bazma Technologies via WhatsApp, phone, or email. Maiduguri HQ and Guangzhou operations.'
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Get In Touch</h1>
        <p className="text-gray-500">We respond within minutes on WhatsApp</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <a href="https://wa.me/2348069568916" target="_blank" className="bg-green-50 border border-green-200 rounded-2xl p-6 hover:shadow-lg transition">
          <MessageCircle className="w-10 h-10 text-green-600 mb-3" />
          <h3 className="font-bold mb-1">WhatsApp Chat</h3>
          <p className="text-sm text-gray-600">+234 806 956 8916</p>
          <p className="text-xs text-green-600 font-bold mt-2">↳ Fastest response</p>
        </a>
        <a href="tel:+2348069568916" className="bg-blue-50 border border-blue-200 rounded-2xl p-6 hover:shadow-lg transition">
          <Phone className="w-10 h-10 text-blue-600 mb-3" />
          <h3 className="font-bold mb-1">Call Us</h3>
          <p className="text-sm text-gray-600">🇳🇬 +234 806 956 8916</p>
          <p className="text-sm text-gray-600">🇨🇳 +86 150 0982 3932</p>
        </a>
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
          <MapPin className="w-10 h-10 text-red-600 mb-3" />
          <h3 className="font-bold mb-1">Visit HQ</h3>
          <p className="text-sm text-gray-600">Maiduguri, Borno State, Nigeria</p>
        </div>
      </div>

      <ContactForm />
    </div>
  )
}