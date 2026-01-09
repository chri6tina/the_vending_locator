import LebanonTennesseeHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Lebanon, Tennessee (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Lebanon, Tennessee. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Lebanon',
    'start vending business Lebanon, Tennessee',
    'Lebanon vending permits',
    'vending machine locations Lebanon',
    'Lebanon vending course',
    'vending business guide Tennessee'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/lebanon-tennessee'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Lebanon, Tennessee',
    description: 'Step-by-step guide with licensing, locations, and vending course for Lebanon, Tennessee',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/lebanon-tennessee',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Lebanon, Tennessee'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Lebanon, Tennessee',
    description: 'Complete guide with licensing, locations, and vending course for Lebanon, Tennessee'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <LebanonTennesseeHowToStartPage />
}
