import BuckeyeArizonaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Buckeye, Arizona (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Buckeye, AZ. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Buckeye',
    'start vending business Buckeye Arizona',
    'Buckeye vending permits',
    'vending machine locations Buckeye',
    'Buckeye vending course',
    'vending business guide Arizona'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/buckeye-arizona'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Buckeye, Arizona',
    description: 'Step-by-step guide with licensing, locations, and vending course for Buckeye, AZ',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/buckeye-arizona',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Buckeye, Arizona'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Buckeye, Arizona',
    description: 'Complete guide with licensing, locations, and vending course for Buckeye, AZ'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <BuckeyeArizonaHowToStartPage />
}



