import CorvallisOregonHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Corvallis, Oregon (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Corvallis, Oregon. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Corvallis',
    'start vending business Corvallis, Oregon',
    'Corvallis vending permits',
    'vending machine locations Corvallis',
    'Corvallis vending course',
    'vending business guide Oregon'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/corvallis-oregon'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Corvallis, Oregon',
    description: 'Step-by-step guide with licensing, locations, and vending course for Corvallis, Oregon',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/corvallis-oregon',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Corvallis, Oregon'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Corvallis, Oregon',
    description: 'Complete guide with licensing, locations, and vending course for Corvallis, Oregon'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <CorvallisOregonHowToStartPage />
}
