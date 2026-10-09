import type { Metadata } from 'next'
import { TrackOrderDemo } from '@/components/shared/TrackOrderDemo'

export const metadata: Metadata = {
  title: 'Track Your Order',
  description: 'Track your Bazma Technologies order from Guangzhou China warehouse all the way to Nigeria delivery.'
}

export default function TrackPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <TrackOrderDemo />
    </div>
  )
}