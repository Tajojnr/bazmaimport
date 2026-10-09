'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { CheckCircle2, Copy, Plane, Truck, ArrowRight, ShieldCheck } from 'lucide-react'
import Link from 'next/link'

function OrderSuccessContent() {
  const searchParams = useSearchParams()
  const [orderNo, setOrderNo] = useState('BZM-2024-84920')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const paramOrder = searchParams.get('orderNo')
    if (paramOrder) {
      setOrderNo(paramOrder)
    } else {
      setOrderNo(`BZM-2024-${Math.floor(10000 + Math.random() * 90000)}`)
    }
  }, [searchParams])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(orderNo)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="container mx-auto px-3 sm:px-4 py-10 md:py-16 text-center max-w-xl">
      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
        <CheckCircle2 className="w-12 h-12" />
      </div>

      <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-2">
        Payment Verified
      </span>

      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-slate-900">Order Placed Successfully! 🎉</h1>
      <p className="text-xs sm:text-sm text-slate-600 mb-6">
        Your device order has been received and dispatch is initiated at our Guangzhou, China sourcing hub.
      </p>

      {/* Tracking Card */}
      <div className="bg-white border border-slate-200 shadow-md rounded-2xl p-5 mb-6 text-left space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div>
            <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Your Official Order &amp; Tracking ID</p>
            <p className="text-2xl font-black text-red-600 tracking-tight">{orderNo}</p>
          </div>
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs px-3 py-2 rounded-lg font-semibold transition"
          >
            <Copy className="w-3.5 h-3.5" /> {copied ? 'Copied!' : 'Copy ID'}
          </button>
        </div>

        {/* Cargo Timeline */}
        <div className="space-y-3 pt-1">
          <div className="flex items-center gap-3 text-xs">
            <div className="w-7 h-7 bg-red-100 text-red-600 rounded-full flex items-center justify-center shrink-0 font-bold">1</div>
            <div><p className="font-bold text-slate-900">Guangzhou Warehouse Dispatch</p><p className="text-[10px] text-slate-500">IMEI verification in progress</p></div>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <div className="w-7 h-7 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0 font-bold"><Plane className="w-3.5 h-3.5" /></div>
            <div><p className="font-bold text-slate-900">China ✈️ Nigeria Air Cargo</p><p className="text-[10px] text-slate-500">Estimated transit time: 7-14 days</p></div>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <div className="w-7 h-7 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0 font-bold"><Truck className="w-3.5 h-3.5" /></div>
            <div><p className="font-bold text-slate-900">Doorstep Delivery</p><p className="text-[10px] text-slate-500">Delivered directly to your address</p></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href={`/track?id=${orderNo}`}
          className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 shadow-md shadow-red-600/20"
        >
          Track Shipment Live <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/shop"
          className="border border-slate-300 text-slate-700 font-bold px-6 py-3.5 rounded-xl text-sm hover:bg-slate-100 transition"
        >
          Shop More Devices
        </Link>
      </div>
    </div>
  )
}

export default function OrderSuccessPage() {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading order summary...</div>}>
      <OrderSuccessContent />
    </Suspense>
  )
}