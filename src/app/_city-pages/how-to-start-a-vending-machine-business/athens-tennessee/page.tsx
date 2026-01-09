import AthensTennesseeHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Athens, Tennessee (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Athens, Tennessee. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Athens',
    'start vending business Athens, Tennessee',
    'Athens vending permits',
    'vending machine locations Athens',
    'Athens vending course',
    'vending business guide Tennessee'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/athens-tennessee'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Athens, Tennessee',
    description: 'Step-by-step guide with licensing, locations, and vending course for Athens, Tennessee',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/athens-tennessee',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Athens, Tennessee'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Athens, Tennessee',
    description: 'Complete guide with licensing, locations, and vending course for Athens, Tennessee'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <AthensTennesseeHowToStartPage />
}
