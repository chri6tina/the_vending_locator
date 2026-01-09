import BelleGladeFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Belle Glade, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Belle Glade, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Belle Glade',
    'start vending business Belle Glade, Florida',
    'Belle Glade vending permits',
    'vending machine locations Belle Glade',
    'Belle Glade vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/belle-glade-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Belle Glade, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Belle Glade, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/belle-glade-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Belle Glade, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Belle Glade, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Belle Glade, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <BelleGladeFloridaHowToStartPage />
}
