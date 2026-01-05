import MadisonvilleKentuckyHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Madisonville, Kentucky (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Madisonville, Kentucky. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Madisonville',
    'start vending business Madisonville, Kentucky',
    'Madisonville vending permits',
    'vending machine locations Madisonville',
    'Madisonville vending course',
    'vending business guide Kentucky'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/madisonville-kentucky'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Madisonville, Kentucky',
    description: 'Step-by-step guide with licensing, locations, and vending course for Madisonville, Kentucky',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/madisonville-kentucky',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Madisonville, Kentucky'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Madisonville, Kentucky',
    description: 'Complete guide with licensing, locations, and vending course for Madisonville, Kentucky'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <MadisonvilleKentuckyHowToStartPage />
}
