import PrescottArizonaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Prescott, Arizona (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Prescott, AZ. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Prescott',
    'start vending business Prescott Arizona',
    'Prescott vending permits',
    'vending machine locations Prescott',
    'Prescott vending course',
    'vending business guide Arizona'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/prescott-arizona'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Prescott, Arizona',
    description: 'Step-by-step guide with licensing, locations, and vending course for Prescott, AZ',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/prescott-arizona',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Prescott, Arizona'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Prescott, Arizona',
    description: 'Complete guide with licensing, locations, and vending course for Prescott, AZ'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <PrescottArizonaHowToStartPage />
}



