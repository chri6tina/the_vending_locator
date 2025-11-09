import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Haha Pro AI Smart Vending Machine | Product Overview',
  description:
    'Explore the Haha Pro AI smart vending machine. Learn about camera-based checkout, stacked merchandising, professional app tools, and deployment best practices.',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/pro'
  }
}

export default function HahaProPage() {
  return <PageClient />
}
