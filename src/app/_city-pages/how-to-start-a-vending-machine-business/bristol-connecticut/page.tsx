import BristolConnecticutHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Bristol, Connecticut (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Bristol, C. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Bristol',
    'start vending business Bristol Connecticut',
    'Bristol vending permits',
    'vending machine locations Bristol',
    'Bristol vending course',
    'vending business guide Connecticut'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/bristol-connecticut'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Bristol, Connecticut',
    description: 'Step-by-step guide with licensing, locations, and vending course for Bristol, C',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/bristol-connecticut',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Bristol, Connecticut'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Bristol, Connecticut',
    description: 'Complete guide with licensing, locations, and vending course for Bristol, C'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <BristolConnecticutHowToStartPage />
}



