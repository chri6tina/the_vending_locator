import HomesteadFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Homestead, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Homestead, F. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Homestead',
    'start vending business Homestead Florida',
    'Homestead vending permits',
    'vending machine locations Homestead',
    'Homestead vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/homestead-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Homestead, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Homestead, F',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/homestead-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Homestead, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Homestead, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Homestead, F'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <HomesteadFloridaHowToStartPage />
}



