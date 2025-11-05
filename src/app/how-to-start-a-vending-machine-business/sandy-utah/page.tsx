import SandyUtahHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Sandy, Utah (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Sandy, Utah. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Sandy',
    'start vending business Sandy Utah',
    'Sandy vending permits',
    'vending machine locations Sandy',
    'Sandy vending course',
    'vending business guide Utah'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/sandy-utah'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Sandy, Utah',
    description: 'Step-by-step guide with licensing, locations, and vending course for Sandy, Utah',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/sandy-utah',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Sandy, Utah'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Sandy, Utah',
    description: 'Complete guide with licensing, locations, and vending course for Sandy, Utah'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <SandyUtahHowToStartPage />
}
