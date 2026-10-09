'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-4h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2025)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="bg-gray-950 text-gray-300 pt-16 pb-6 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Brand Column */}
          <div className="space-y-4">
            <img src="/logo-white.svg" alt="Bazma Technologies" className="h-12 w-auto" />
            <p className="text-sm text-gray-400 leading-relaxed">
              Nigeria's trusted import & export partner for 100% genuine Apple, Samsung, and Google devices directly from China.
            </p>
            <p className="text-xs text-red-500 font-bold">YOUR TRUST ●● OUR PRIORITY</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/shop" className="hover:text-red-500">Shop All iPhones</Link></li>
              <li><Link href="/track" className="hover:text-red-500">Track Order</Link></li>
              <li><Link href="/services" className="hover:text-red-500">IT & Software</Link></li>
              <li><Link href="/about" className="hover:text-red-500">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-red-500">Contact Support</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase">Reach Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Maiduguri HQ, Borno State, Nigeria 🇳🇬</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-500" />
                <a href="tel:+2348069568916" className="hover:text-white">+234 806 956 8916</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-500" />
                <a href="tel:+8615009823932" className="hover:text-white">+86 150 0982 3932</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-500" />
                <a href="mailto:info@bazmatechnologies.ng" className="hover:text-white">info@bazmatechnologies.ng</a>
              </li>
            </ul>
          </div>

          {/* Payment Methods */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase">We Accept</h4>
            <div className="grid grid-cols-2 gap-2">
              <img src="/icons/paystack.svg" alt="Paystack" className="h-10 w-full object-contain bg-white/5 rounded p-1" />
              <img src="/icons/flutterwave.svg" alt="Flutterwave" className="h-10 w-full object-contain bg-white/5 rounded p-1" />
              <img src="/icons/visa.svg" alt="Visa" className="h-10 w-full object-contain bg-white/5 rounded p-1" />
              <img src="/icons/mastercard.svg" alt="Mastercard" className="h-10 w-full object-contain bg-white/5 rounded p-1" />
              <img src="/icons/bank-transfer.svg" alt="Bank Transfer" className="h-10 w-full object-contain bg-white/5 rounded p-1" />
              <img src="/icons/usdt-crypto.svg" alt="USDT Crypto" className="h-10 w-full object-contain bg-white/5 rounded p-1" />
            </div>
            <div className="mt-4 flex gap-2">
              <img src="/icons/dhl.svg" alt="DHL" className="h-8 object-contain" />
              <img src="/icons/fedex.svg" alt="FedEx" className="h-8 object-contain" />
            </div>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {currentYear} Bazma Technologies Nig Ltd. All Rights Reserved. RC-7492014</p>
          <div className="flex items-center gap-4">
            <a href="https://tiktok.com/@_elzubs" target="_blank" className="hover:text-red-500 font-bold">TikTok @_elzubs</a>
            <a href="#" className="hover:text-red-500" aria-label="Instagram"><InstagramIcon /></a>
            <a href="#" className="hover:text-red-500" aria-label="Facebook"><FacebookIcon /></a>
            <a href="#" className="hover:text-red-500" aria-label="Twitter"><TwitterIcon /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}