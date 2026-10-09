'use client'

import { useState, useEffect } from 'react'
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
  { name: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { toggleCart, totalItems } = useCartStore()

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // Subtle shadow after scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      {/* Slim top bar — desktop only */}
      <div className="hidden md:block bg-red-600 text-white text-[11px] py-1.5 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-5">
            <a href="tel:+2348069568916" className="flex items-center gap-1.5 hover:underline">
              <Phone className="w-3 h-3" /> 🇳🇬 +234 806 956 8916
            </a>
            <a href="tel:+8615009823932" className="flex items-center gap-1.5 hover:underline">
              <Phone className="w-3 h-3" /> 🇨🇳 +86 150 0982 3932
            </a>
          </div>
          <div className="flex items-center gap-3 font-medium tracking-wide">
            <span>ORIGINAL · TRUSTED · GLOBAL</span>
            <span className="bg-white/20 px-2 py-0.5 rounded text-[10px] font-bold">
              EST. 2024
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? 'shadow-md shadow-black/5' : 'border-b border-gray-100'
        }`}
      >
        <div className="container mx-auto px-4 h-14 md:h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <img
              src="/logo.svg"
              alt="Bazma Technologies"
              className="h-9 md:h-11 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? 'text-red-600 bg-red-50'
                      : 'text-gray-600 hover:text-red-600 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-1.5 md:gap-2">
            {/* Search — desktop */}
            <button
              className="hidden md:flex p-2.5 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full transition"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Cart */}
            <button
              onClick={toggleCart}
              className="relative p-2.5 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-full transition"
              aria-label="Open cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems() > 0 && (
                <span className="absolute top-1 right-1 bg-red-600 text-white text-[10px] font-bold min-w-[16px] h-4 px-1 rounded-full flex items-center justify-center leading-none border-2 border-white">
                  {totalItems() > 9 ? '9+' : totalItems()}
                </span>
              )}
            </button>

            {/* Hamburger — mobile/tablet */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2.5 text-gray-700 hover:bg-gray-100 rounded-full transition"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* ─── Mobile Full-Screen Drawer ─── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          {/* Panel */}
          <div className="absolute top-0 right-0 bottom-0 w-[min(100%,320px)] bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-200">
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-5 h-14 border-b border-gray-100">
              <img src="/logo.svg" alt="Bazma" className="h-8 w-auto" />
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-gray-500 hover:bg-gray-100 rounded-full"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Links */}
            <nav className="flex-1 overflow-y-auto px-3 py-4">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center px-4 py-3.5 rounded-xl text-[15px] font-medium mb-1 transition ${
                      active
                        ? 'bg-red-50 text-red-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {link.name}
                    {active && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-red-600" />
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* Drawer Footer */}
            <div className="border-t border-gray-100 p-5 space-y-3">
              <a
                href="https://wa.me/2348069568916"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl text-sm"
              >
                WhatsApp Us
              </a>
              <div className="text-center text-xs text-gray-400 space-y-1">
                <a href="tel:+2348069568916" className="block hover:text-red-600">
                  🇳🇬 +234 806 956 8916
                </a>
                <a href="tel:+8615009823932" className="block hover:text-red-600">
                  🇨🇳 +86 150 0982 3932
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}