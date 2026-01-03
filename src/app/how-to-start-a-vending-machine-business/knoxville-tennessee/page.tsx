import KnoxvilleTennesseeHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Knoxville, Tennessee (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Knoxville, Tennessee. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Knoxville',
    'start vending business Knoxville Tennessee',
    'Knoxville vending permits',
    'vending machine locations Knoxville',
    'Knoxville vending course',
    'vending business guide Tennessee'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/knoxville-tennessee'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Knoxville, Tennessee',
    description: 'Step-by-step guide with licensing, locations, and vending course for Knoxville, Tennessee',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/knoxville-tennessee',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Knoxville, Tennessee'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Knoxville, Tennessee',
    description: 'Complete guide with licensing, locations, and vending course for Knoxville, Tennessee'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <KnoxvilleTennesseeHowToStartPage />
}
