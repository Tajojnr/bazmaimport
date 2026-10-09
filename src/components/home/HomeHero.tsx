'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'

export function HomeHero() {
  return (
    <section className="relative min-h-[100svh] md:min-h-[700px] bg-black text-white flex items-end md:items-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/videos/hero-bg-poster.webp"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark gradient — stronger at bottom for mobile readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />

      <div className="container mx-auto px-5 relative z-10 pb-10 pt-28 md:py-0 md:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="max-w-xl"
        >
          {/* Subtle location chip — quiet, not competing */}
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[11px] tracking-[0.2em] uppercase text-white/70 font-medium">
              Maiduguri · Est. 2024
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[2.35rem] leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
            Original iPhones,
            <br />
            <span className="text-red-500">Direct From China</span>
            <br />
            To Your Doorstep
          </h1>

          {/* Subtext */}
          <p className="text-white/70 text-[15px] sm:text-base md:text-lg leading-relaxed mb-8 max-w-md">
            Nigeria&apos;s trusted import partner for 100% genuine Apple, Samsung &amp; Google devices. Factory sealed.
          </p>

          {/* CTAs — clear hierarchy */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Link
              href="/shop"
              className="group inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold text-[15px] px-7 py-4 rounded-2xl shadow-lg shadow-red-600/25 transition-all active:scale-[0.98]"
            >
              Shop All Devices
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-md text-white font-medium text-[15px] px-7 py-4 rounded-2xl border border-white/15 transition-all active:scale-[0.98]"
            >
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/15">
                <Play className="w-3 h-3 fill-white" />
              </span>
              Our Story
            </Link>
          </div>

          {/* Stats — clean, equal weight */}
          <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-6">
            <div>
              <p className="text-xl sm:text-2xl font-bold tracking-tight">3,000+</p>
              <p className="text-[11px] text-white/50 mt-0.5">Phones Sold</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold tracking-tight">500+</p>
              <p className="text-[11px] text-white/50 mt-0.5">Happy Clients</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold tracking-tight">36</p>
              <p className="text-[11px] text-white/50 mt-0.5">States Served</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}