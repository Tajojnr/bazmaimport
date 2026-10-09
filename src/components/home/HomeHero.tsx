'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle } from 'lucide-react'

export function HomeHero() {
  return (
    <section className="relative h-[650px] md:h-[700px] bg-black text-white flex items-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/videos/hero-bg-poster.webp"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="bg-red-600 text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider inline-block mb-6">
            🔥 Founded 2024 • Maiduguri HQ
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Original iPhones,<br />
            <span className="text-red-500">Direct From China</span><br />
            To Your Doorstep
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
            Bazma Technologies Nig Ltd — Nigeria's most trusted import & export partner. 
            100% genuine Apple, Samsung, and Google devices. Factory sealed.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 shadow-2xl shadow-red-600/40 transition-transform hover:scale-105"
            >
              Shop All Devices <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/about"
              className="bg-white/10 backdrop-blur hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-xl font-bold flex items-center gap-2"
            >
              <PlayCircle className="w-5 h-5" /> Our Story
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-gray-300">
            <div><strong className="text-white text-xl block">3,000+</strong>Phones Sold</div>
            <div className="w-px h-10 bg-white/20" />
            <div><strong className="text-white text-xl block">500+</strong>Happy Clients</div>
            <div className="w-px h-10 bg-white/20" />
            <div><strong className="text-white text-xl block">36</strong>Nigerian States</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}