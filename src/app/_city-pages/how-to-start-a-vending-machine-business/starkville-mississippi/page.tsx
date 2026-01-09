import StarkvilleMississippiHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Starkville, Mississippi (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Starkville, Mississippi. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Starkville',
    'start vending business Starkville, Mississippi',
    'Starkville vending permits',
    'vending machine locations Starkville',
    'Starkville vending course',
    'vending business guide Mississippi'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/starkville-mississippi'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Starkville, Mississippi',
    description: 'Step-by-step guide with licensing, locations, and vending course for Starkville, Mississippi',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/starkville-mississippi',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Starkville, Mississippi'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Starkville, Mississippi',
    description: 'Complete guide with licensing, locations, and vending course for Starkville, Mississippi'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <StarkvilleMississippiHowToStartPage />
}
