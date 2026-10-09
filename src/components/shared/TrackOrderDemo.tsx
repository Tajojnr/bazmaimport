'use client'

import { useState } from 'react'
import { Package, CheckCircle2, Plane, Truck, Home, Search } from 'lucide-react'

const STAGES = [
  { icon: CheckCircle2, label: 'Order Placed', date: 'Oct 1, 2024', done: true },
  { icon: Package, label: 'Sourced in Guangzhou', date: 'Oct 3, 2024', done: true },
  { icon: Plane, label: 'In Transit (Air Cargo)', date: 'Oct 5, 2024', done: true },
  { icon: Truck, label: 'Nigeria Customs Clearance', date: 'Oct 9, 2024', done: false, current: true },
  { icon: Home, label: 'Out for Delivery', date: 'Est. Oct 12, 2024', done: false },
  { icon: CheckCircle2, label: 'Delivered', date: 'Est. Oct 13, 2024', done: false }
]

export function TrackOrderDemo() {
  const [id, setId] = useState('')
  const [tracked, setTracked] = useState(false)

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <Package className="w-16 h-16 text-red-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-2">Track Your Order</h1>
        <p className="text-gray-500">Enter your Order ID to see real-time shipment status</p>
      </div>

      <form
        onSubmit={(e) => { e.preventDefault(); if (id.trim()) setTracked(true) }}
        className="flex gap-2 mb-10"
      >
        <input
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="e.g. BZM-2024-00102"
          className="flex-1 border rounded-xl px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 rounded-xl flex items-center gap-2">
          <Search className="w-4 h-4" /> Track
        </button>
      </form>

      {tracked && (
        <div className="bg-white border rounded-2xl p-8">
          <div className="flex justify-between items-center pb-6 mb-6 border-b">
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold">Order Number</p>
              <p className="text-xl font-bold">{id.toUpperCase()}</p>
            </div>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">IN TRANSIT</span>
          </div>

          <div className="relative space-y-6">
            {STAGES.map((s, i) => (
              <div key={s.label} className="flex gap-4 items-start relative">
                <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
                  s.done ? 'bg-green-500 text-white' : s.current ? 'bg-red-600 text-white animate-pulse' : 'bg-gray-200 text-gray-400'
                }`}>
                  <s.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 pb-2">
                  <p className={`font-bold ${s.done || s.current ? 'text-gray-900' : 'text-gray-400'}`}>{s.label}</p>
                  <p className="text-xs text-gray-500">{s.date}</p>
                </div>
                {i < STAGES.length - 1 && (
                  <div className={`absolute left-6 top-12 w-0.5 h-8 ${s.done ? 'bg-green-500' : 'bg-gray-200'}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}