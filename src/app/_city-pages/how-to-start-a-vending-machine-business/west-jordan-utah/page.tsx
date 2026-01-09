import WestJordanUtahHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in West Jordan, Utah (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in West Jordan, Utah. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business West Jordan',
    'start vending business West Jordan Utah',
    'West Jordan vending permits',
    'vending machine locations West Jordan',
    'West Jordan vending course',
    'vending business guide Utah'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/west-jordan-utah'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in West Jordan, Utah',
    description: 'Step-by-step guide with licensing, locations, and vending course for West Jordan, Utah',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/west-jordan-utah',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in West Jordan, Utah'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in West Jordan, Utah',
    description: 'Complete guide with licensing, locations, and vending course for West Jordan, Utah'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <WestJordanUtahHowToStartPage />
}
