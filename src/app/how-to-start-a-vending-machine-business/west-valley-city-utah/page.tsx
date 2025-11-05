import WestValleyCityUtahHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in West Valley City, Utah (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in West Valley City, Utah. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business West Valley City',
    'start vending business West Valley City Utah',
    'West Valley City vending permits',
    'vending machine locations West Valley City',
    'West Valley City vending course',
    'vending business guide Utah'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/west-valley-city-utah'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in West Valley City, Utah',
    description: 'Step-by-step guide with licensing, locations, and vending course for West Valley City, Utah',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/west-valley-city-utah',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in West Valley City, Utah'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in West Valley City, Utah',
    description: 'Complete guide with licensing, locations, and vending course for West Valley City, Utah'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <WestValleyCityUtahHowToStartPage />
}
