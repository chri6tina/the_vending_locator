import GulfportMississippiHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Gulfport, Mississippi (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Gulfport, Mississippi. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Gulfport',
    'start vending business Gulfport Mississippi',
    'Gulfport vending permits',
    'vending machine locations Gulfport',
    'Gulfport vending course',
    'vending business guide Mississippi'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/gulfport-mississippi'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Gulfport, Mississippi',
    description: 'Step-by-step guide with licensing, locations, and vending course for Gulfport, Mississippi',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/gulfport-mississippi',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Gulfport, Mississippi'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Gulfport, Mississippi',
    description: 'Complete guide with licensing, locations, and vending course for Gulfport, Mississippi'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <GulfportMississippiHowToStartPage />
}
