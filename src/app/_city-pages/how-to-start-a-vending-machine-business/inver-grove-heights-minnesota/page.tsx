import InverGroveHeightsMinnesotaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Inver Grove Heights, Minnesota (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Inver Grove Heights, Minnesota. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Inver Grove Heights',
    'start vending business Inver Grove Heights, Minnesota',
    'Inver Grove Heights vending permits',
    'vending machine locations Inver Grove Heights',
    'Inver Grove Heights vending course',
    'vending business guide Minnesota'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/inver-grove-heights-minnesota'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Inver Grove Heights, Minnesota',
    description: 'Step-by-step guide with licensing, locations, and vending course for Inver Grove Heights, Minnesota',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/inver-grove-heights-minnesota',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Inver Grove Heights, Minnesota'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Inver Grove Heights, Minnesota',
    description: 'Complete guide with licensing, locations, and vending course for Inver Grove Heights, Minnesota'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <InverGroveHeightsMinnesotaHowToStartPage />
}
