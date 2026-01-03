import KennerLouisianaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Kenner, Louisiana (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Kenner, Louisiana. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Kenner',
    'start vending business Kenner Louisiana',
    'Kenner vending permits',
    'vending machine locations Kenner',
    'Kenner vending course',
    'vending business guide Louisiana'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/kenner-louisiana'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Kenner, Louisiana',
    description: 'Step-by-step guide with licensing, locations, and vending course for Kenner, Louisiana',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/kenner-louisiana',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Kenner, Louisiana'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Kenner, Louisiana',
    description: 'Complete guide with licensing, locations, and vending course for Kenner, Louisiana'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <KennerLouisianaHowToStartPage />
}
