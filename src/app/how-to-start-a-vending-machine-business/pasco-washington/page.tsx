import PascoWashingtonHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Pasco, Washington (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Pasco, Washington. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Pasco',
    'start vending business Pasco, Washington',
    'Pasco vending permits',
    'vending machine locations Pasco',
    'Pasco vending course',
    'vending business guide Washington'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/pasco-washington'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Pasco, Washington',
    description: 'Step-by-step guide with licensing, locations, and vending course for Pasco, Washington',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/pasco-washington',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Pasco, Washington'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Pasco, Washington',
    description: 'Complete guide with licensing, locations, and vending course for Pasco, Washington'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <PascoWashingtonHowToStartPage />
}
