'use client'

import { useState, useEffect } from 'react'
import { CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

export default function OrderSuccessPage() {
  const [orderNo, setOrderNo] = useState('BZM-2024-88492')

  useEffect(() => {
    setOrderNo(`BZM-2024-${Math.floor(10000 + Math.random() * 90000)}`)
  }, [])

  return (
    <div className="container mx-auto px-4 py-20 text-center max-w-xl">
      <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
      <h1 className="text-3xl font-bold mb-4">Order Placed Successfully! 🎉</h1>
      <p className="text-gray-600 mb-6">
        Your order has been received and is being processed at our Guangzhou sourcing facility.
      </p>
      <div className="bg-gray-50 border border-dashed border-gray-300 rounded-2xl p-6 mb-6">
        <p className="text-xs text-gray-500 uppercase font-bold">Order Number</p>
        <p className="text-2xl font-bold text-red-600 mt-1">{orderNo}</p>
      </div>
      <div className="flex gap-3 justify-center">
        <Link href={`/track?id=${orderNo}`} className="bg-red-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-red-700">
          Track Order
        </Link>
        <Link href="/shop" className="border border-gray-300 font-bold px-6 py-3 rounded-xl hover:bg-gray-50">
          Shop More
        </Link>
      </div>
    </div>
  )
}