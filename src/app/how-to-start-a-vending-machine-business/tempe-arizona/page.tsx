import TempeArizonaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Tempe, Arizona (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Tempe, Arizona. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Tempe',
    'start vending business Tempe Arizona',
    'Tempe vending permits',
    'vending machine locations Tempe',
    'Tempe vending course',
    'vending business guide Arizona'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/tempe-arizona'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Tempe, Arizona',
    description: 'Step-by-step guide with licensing, locations, and vending course for Tempe, Arizona',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/tempe-arizona',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Tempe, Arizona'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Tempe, Arizona',
    description: 'Complete guide with licensing, locations, and vending course for Tempe, Arizona'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <TempeArizonaHowToStartPage />
}
