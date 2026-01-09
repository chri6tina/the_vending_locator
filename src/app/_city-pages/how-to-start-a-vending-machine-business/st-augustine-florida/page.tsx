import StAugustineFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in St. Augustine, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in St. Augustine, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business St. Augustine',
    'start vending business St. Augustine, Florida',
    'St. Augustine vending permits',
    'vending machine locations St. Augustine',
    'St. Augustine vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/st-augustine-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in St. Augustine, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for St. Augustine, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/st-augustine-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in St. Augustine, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in St. Augustine, Florida',
    description: 'Complete guide with licensing, locations, and vending course for St. Augustine, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <StAugustineFloridaHowToStartPage />
}
