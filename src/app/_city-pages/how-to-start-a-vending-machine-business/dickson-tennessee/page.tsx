import DicksonTennesseeHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Dickson, Tennessee (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Dickson, Tennessee. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Dickson',
    'start vending business Dickson, Tennessee',
    'Dickson vending permits',
    'vending machine locations Dickson',
    'Dickson vending course',
    'vending business guide Tennessee'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/dickson-tennessee'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Dickson, Tennessee',
    description: 'Step-by-step guide with licensing, locations, and vending course for Dickson, Tennessee',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/dickson-tennessee',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Dickson, Tennessee'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Dickson, Tennessee',
    description: 'Complete guide with licensing, locations, and vending course for Dickson, Tennessee'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <DicksonTennesseeHowToStartPage />
}
