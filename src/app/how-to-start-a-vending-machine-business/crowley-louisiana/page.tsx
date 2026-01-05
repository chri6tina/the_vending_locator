import CrowleyLouisianaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Crowley, Louisiana (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Crowley, Louisiana. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Crowley',
    'start vending business Crowley, Louisiana',
    'Crowley vending permits',
    'vending machine locations Crowley',
    'Crowley vending course',
    'vending business guide Louisiana'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/crowley-louisiana'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Crowley, Louisiana',
    description: 'Step-by-step guide with licensing, locations, and vending course for Crowley, Louisiana',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/crowley-louisiana',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Crowley, Louisiana'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Crowley, Louisiana',
    description: 'Complete guide with licensing, locations, and vending course for Crowley, Louisiana'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <CrowleyLouisianaHowToStartPage />
}
