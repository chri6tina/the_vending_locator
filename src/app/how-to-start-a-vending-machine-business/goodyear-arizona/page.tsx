import GoodyearArizonaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Goodyear, Arizona (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Goodyear, AZ. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Goodyear',
    'start vending business Goodyear Arizona',
    'Goodyear vending permits',
    'vending machine locations Goodyear',
    'Goodyear vending course',
    'vending business guide Arizona'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/goodyear-arizona'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Goodyear, Arizona',
    description: 'Step-by-step guide with licensing, locations, and vending course for Goodyear, AZ',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/goodyear-arizona',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Goodyear, Arizona'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Goodyear, Arizona',
    description: 'Complete guide with licensing, locations, and vending course for Goodyear, AZ'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <GoodyearArizonaHowToStartPage />
}



