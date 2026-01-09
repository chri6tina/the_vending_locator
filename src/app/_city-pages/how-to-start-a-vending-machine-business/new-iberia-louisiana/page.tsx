import NewIberiaLouisianaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in New Iberia, Louisiana (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in New Iberia, Louisiana. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business New Iberia',
    'start vending business New Iberia, Louisiana',
    'New Iberia vending permits',
    'vending machine locations New Iberia',
    'New Iberia vending course',
    'vending business guide Louisiana'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/new-iberia-louisiana'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in New Iberia, Louisiana',
    description: 'Step-by-step guide with licensing, locations, and vending course for New Iberia, Louisiana',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/new-iberia-louisiana',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in New Iberia, Louisiana'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in New Iberia, Louisiana',
    description: 'Complete guide with licensing, locations, and vending course for New Iberia, Louisiana'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <NewIberiaLouisianaHowToStartPage />
}
