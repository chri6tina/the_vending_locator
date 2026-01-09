import IndianolaMississippiHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Indianola, Mississippi (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Indianola, Mississippi. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Indianola',
    'start vending business Indianola, Mississippi',
    'Indianola vending permits',
    'vending machine locations Indianola',
    'Indianola vending course',
    'vending business guide Mississippi'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/indianola-mississippi'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Indianola, Mississippi',
    description: 'Step-by-step guide with licensing, locations, and vending course for Indianola, Mississippi',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/indianola-mississippi',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Indianola, Mississippi'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Indianola, Mississippi',
    description: 'Complete guide with licensing, locations, and vending course for Indianola, Mississippi'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <IndianolaMississippiHowToStartPage />
}
