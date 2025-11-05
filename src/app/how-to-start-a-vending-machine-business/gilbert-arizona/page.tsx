import GilbertArizonaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Gilbert, Arizona (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Gilbert, Arizona. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Gilbert',
    'start vending business Gilbert Arizona',
    'Gilbert vending permits',
    'vending machine locations Gilbert',
    'Gilbert vending course',
    'vending business guide Arizona'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/gilbert-arizona'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Gilbert, Arizona',
    description: 'Step-by-step guide with licensing, locations, and vending course for Gilbert, Arizona',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/gilbert-arizona',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Gilbert, Arizona'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Gilbert, Arizona',
    description: 'Complete guide with licensing, locations, and vending course for Gilbert, Arizona'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <GilbertArizonaHowToStartPage />
}
