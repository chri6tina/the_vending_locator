import WestonFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Weston, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Weston, F. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Weston',
    'start vending business Weston Florida',
    'Weston vending permits',
    'vending machine locations Weston',
    'Weston vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/weston-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Weston, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Weston, F',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/weston-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Weston, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Weston, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Weston, F'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <WestonFloridaHowToStartPage />
}



