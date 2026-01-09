import WestfieldIndianaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Westfield, Indiana (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Westfield, Indiana. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Westfield',
    'start vending business Westfield, Indiana',
    'Westfield vending permits',
    'vending machine locations Westfield',
    'Westfield vending course',
    'vending business guide Indiana'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/westfield-indiana'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Westfield, Indiana',
    description: 'Step-by-step guide with licensing, locations, and vending course for Westfield, Indiana',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/westfield-indiana',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Westfield, Indiana'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Westfield, Indiana',
    description: 'Complete guide with licensing, locations, and vending course for Westfield, Indiana'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <WestfieldIndianaHowToStartPage />
}
