import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Haha Ultra AI Smart Vending Machine | Specs & Deployment Guide',
  description:
    'Review specs, capacity, and deployment best practices for the Haha Ultra AI smart vending machine. Ideal for high-traffic placements requiring contactless grab-and-go retail.',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/ultra'
  }
}

export default function HahaUltraPage() {
  return <PageClient />
}
