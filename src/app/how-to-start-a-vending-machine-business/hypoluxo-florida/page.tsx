import HypoluxoFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Hypoluxo, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Hypoluxo, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Hypoluxo',
    'start vending business Hypoluxo, Florida',
    'Hypoluxo vending permits',
    'vending machine locations Hypoluxo',
    'Hypoluxo vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/hypoluxo-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Hypoluxo, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Hypoluxo, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/hypoluxo-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Hypoluxo, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Hypoluxo, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Hypoluxo, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <HypoluxoFloridaHowToStartPage />
}
