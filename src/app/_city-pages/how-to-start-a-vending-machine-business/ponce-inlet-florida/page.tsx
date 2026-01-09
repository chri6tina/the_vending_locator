import PonceInletFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Ponce Inlet, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Ponce Inlet, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Ponce Inlet',
    'start vending business Ponce Inlet, Florida',
    'Ponce Inlet vending permits',
    'vending machine locations Ponce Inlet',
    'Ponce Inlet vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/ponce-inlet-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Ponce Inlet, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Ponce Inlet, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/ponce-inlet-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Ponce Inlet, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Ponce Inlet, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Ponce Inlet, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <PonceInletFloridaHowToStartPage />
}
