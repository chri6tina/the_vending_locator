import ApacheJunctionArizonaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Apache Junction, Arizona (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Apache Junction, Arizona. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Apache Junction',
    'start vending business Apache Junction, Arizona',
    'Apache Junction vending permits',
    'vending machine locations Apache Junction',
    'Apache Junction vending course',
    'vending business guide Arizona'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/apache-junction-arizona'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Apache Junction, Arizona',
    description: 'Step-by-step guide with licensing, locations, and vending course for Apache Junction, Arizona',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/apache-junction-arizona',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Apache Junction, Arizona'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Apache Junction, Arizona',
    description: 'Complete guide with licensing, locations, and vending course for Apache Junction, Arizona'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <ApacheJunctionArizonaHowToStartPage />
}
