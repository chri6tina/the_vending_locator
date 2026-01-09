import OrlandoFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Orlando, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Orlando, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Orlando',
    'start vending business Orlando Florida',
    'Orlando vending permits',
    'vending machine locations Orlando',
    'Orlando vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/orlando-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Orlando, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Orlando, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/orlando-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Orlando, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Orlando, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Orlando, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <OrlandoFloridaHowToStartPage />
}
