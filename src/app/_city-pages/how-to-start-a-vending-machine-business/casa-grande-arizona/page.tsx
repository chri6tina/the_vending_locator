import CasaGrandeArizonaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Casa Grande, Arizona (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Casa Grande, AZ. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Casa Grande',
    'start vending business Casa Grande Arizona',
    'Casa Grande vending permits',
    'vending machine locations Casa Grande',
    'Casa Grande vending course',
    'vending business guide Arizona'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/casa-grande-arizona'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Casa Grande, Arizona',
    description: 'Step-by-step guide with licensing, locations, and vending course for Casa Grande, AZ',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/casa-grande-arizona',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Casa Grande, Arizona'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Casa Grande, Arizona',
    description: 'Complete guide with licensing, locations, and vending course for Casa Grande, AZ'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <CasaGrandeArizonaHowToStartPage />
}



