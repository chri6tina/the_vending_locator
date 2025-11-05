import CapeCoralFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Cape Coral, Florida (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Cape Coral, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Cape Coral',
    'start vending business Cape Coral Florida',
    'Cape Coral vending permits',
    'vending machine locations Cape Coral',
    'Cape Coral vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/cape-coral-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Cape Coral, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Cape Coral, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/cape-coral-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Cape Coral, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Cape Coral, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Cape Coral, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <CapeCoralFloridaHowToStartPage />
}
