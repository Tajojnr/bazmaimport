'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ShoppingBag, Menu, X, Phone, Search } from 'lucide-react'
import { useCartStore } from '@/lib/cart-store'

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop' },
  { name: 'Track Order', href: '/track' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const { toggleCart, totalItems } = useCartStore()

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-red-600 text-white text-xs py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+2348069568916" className="flex items-center gap-1.5 hover:underline">
              <Phone className="w-3 h-3" /> 🇳🇬 +234 806 956 8916
            </a>
            <a href="tel:+8615009823932" className="flex items-center gap-1.5 hover:underline">
              <Phone className="w-3 h-3" /> 🇨🇳 +86 150 0982 3932
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold">ORIGINAL • TRUSTED • GLOBAL</span>
            <span className="bg-yellow-400 text-black px-2 py-0.5 rounded font-bold text-[10px]">
              FOUNDED 2024
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.svg" alt="Bazma Technologies" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition hover:text-red-600 ${
                  pathname === link.href
                    ? 'text-red-600 font-bold border-b-2 border-red-600 pb-1'
                    : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button className="hidden md:flex p-2 text-gray-600 hover:text-red-600">
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={toggleCart}
              className="relative bg-red-50 text-red-600 p-3 rounded-full hover:bg-red-100 transition"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold animate-pulse">
                  {totalItems()}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-gray-600"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="flex flex-col p-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-xl font-medium ${
                    pathname === link.href
                      ? 'bg-red-50 text-red-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t mt-2">
                <a href="tel:+2348069568916" className="flex items-center gap-2 text-sm text-gray-600 px-4 py-2">
                  <Phone className="w-4 h-4 text-red-500" /> +234 806 956 8916
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}