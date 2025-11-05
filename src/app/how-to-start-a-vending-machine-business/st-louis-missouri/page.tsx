import StLouisMissouriHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in St. Louis, Missouri (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in St. Louis, Missouri. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business St. Louis',
    'start vending business St. Louis Missouri',
    'St. Louis vending permits',
    'vending machine locations St. Louis',
    'St. Louis vending course',
    'vending business guide Missouri'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/st-louis-missouri'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in St. Louis, Missouri',
    description: 'Step-by-step guide with licensing, locations, and vending course for St. Louis, Missouri',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/st-louis-missouri',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in St. Louis, Missouri'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in St. Louis, Missouri',
    description: 'Complete guide with licensing, locations, and vending course for St. Louis, Missouri'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <StLouisMissouriHowToStartPage />
}
