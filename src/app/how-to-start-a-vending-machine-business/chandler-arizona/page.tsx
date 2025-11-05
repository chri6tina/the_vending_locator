import ChandlerArizonaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Chandler, Arizona (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Chandler, Arizona. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Chandler',
    'start vending business Chandler Arizona',
    'Chandler vending permits',
    'vending machine locations Chandler',
    'Chandler vending course',
    'vending business guide Arizona'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/chandler-arizona'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Chandler, Arizona',
    description: 'Step-by-step guide with licensing, locations, and vending course for Chandler, Arizona',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/chandler-arizona',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Chandler, Arizona'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Chandler, Arizona',
    description: 'Complete guide with licensing, locations, and vending course for Chandler, Arizona'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <ChandlerArizonaHowToStartPage />
}
