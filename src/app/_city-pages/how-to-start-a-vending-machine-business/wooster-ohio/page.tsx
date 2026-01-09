import WoosterOhioHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Wooster, Ohio (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Wooster, Ohio. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Wooster',
    'start vending business Wooster, Ohio',
    'Wooster vending permits',
    'vending machine locations Wooster',
    'Wooster vending course',
    'vending business guide Ohio'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/wooster-ohio'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Wooster, Ohio',
    description: 'Step-by-step guide with licensing, locations, and vending course for Wooster, Ohio',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/wooster-ohio',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Wooster, Ohio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Wooster, Ohio',
    description: 'Complete guide with licensing, locations, and vending course for Wooster, Ohio'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <WoosterOhioHowToStartPage />
}
