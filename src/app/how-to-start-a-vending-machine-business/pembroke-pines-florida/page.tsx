import PembrokePinesFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Pembroke Pines, Florida (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Pembroke Pines, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Pembroke Pines',
    'start vending business Pembroke Pines Florida',
    'Pembroke Pines vending permits',
    'vending machine locations Pembroke Pines',
    'Pembroke Pines vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/pembroke-pines-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Pembroke Pines, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Pembroke Pines, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/pembroke-pines-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Pembroke Pines, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Pembroke Pines, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Pembroke Pines, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <PembrokePinesFloridaHowToStartPage />
}
