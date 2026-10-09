'use client'

import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'

export function ContactForm() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="max-w-2xl mx-auto text-center p-10 bg-green-50 border border-green-200 rounded-2xl">
        <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
        <p className="text-gray-600">Our team will respond within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white border rounded-2xl p-8 space-y-4">
      <h2 className="font-bold text-xl mb-4">Send us a message</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <input placeholder="Your Name" required className="border rounded-xl px-4 py-3" />
        <input placeholder="Phone Number" required className="border rounded-xl px-4 py-3" />
      </div>
      <input placeholder="Email" type="email" required className="w-full border rounded-xl px-4 py-3" />
      <input placeholder="Subject" required className="w-full border rounded-xl px-4 py-3" />
      <textarea placeholder="Your message..." rows={5} required className="w-full border rounded-xl px-4 py-3" />
      <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2">
        <Send className="w-4 h-4" /> Send Message
      </button>
    </form>
  )
}