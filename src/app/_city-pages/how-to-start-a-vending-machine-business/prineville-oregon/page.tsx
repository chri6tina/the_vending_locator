import PrinevilleOregonHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Prineville, Oregon (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Prineville, Oregon. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Prineville',
    'start vending business Prineville, Oregon',
    'Prineville vending permits',
    'vending machine locations Prineville',
    'Prineville vending course',
    'vending business guide Oregon'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/prineville-oregon'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Prineville, Oregon',
    description: 'Step-by-step guide with licensing, locations, and vending course for Prineville, Oregon',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/prineville-oregon',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Prineville, Oregon'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Prineville, Oregon',
    description: 'Complete guide with licensing, locations, and vending course for Prineville, Oregon'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <PrinevilleOregonHowToStartPage />
}
