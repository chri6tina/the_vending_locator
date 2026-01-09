import WickliffeOhioHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Wickliffe, Ohio (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Wickliffe, Ohio. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Wickliffe',
    'start vending business Wickliffe, Ohio',
    'Wickliffe vending permits',
    'vending machine locations Wickliffe',
    'Wickliffe vending course',
    'vending business guide Ohio'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/wickliffe-ohio'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Wickliffe, Ohio',
    description: 'Step-by-step guide with licensing, locations, and vending course for Wickliffe, Ohio',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/wickliffe-ohio',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Wickliffe, Ohio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Wickliffe, Ohio',
    description: 'Complete guide with licensing, locations, and vending course for Wickliffe, Ohio'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <WickliffeOhioHowToStartPage />
}
