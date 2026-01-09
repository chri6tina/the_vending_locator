import GreenwoodMississippiHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Greenwood, Mississippi (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Greenwood, Mississippi. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Greenwood',
    'start vending business Greenwood, Mississippi',
    'Greenwood vending permits',
    'vending machine locations Greenwood',
    'Greenwood vending course',
    'vending business guide Mississippi'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/greenwood-mississippi'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Greenwood, Mississippi',
    description: 'Step-by-step guide with licensing, locations, and vending course for Greenwood, Mississippi',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/greenwood-mississippi',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Greenwood, Mississippi'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Greenwood, Mississippi',
    description: 'Complete guide with licensing, locations, and vending course for Greenwood, Mississippi'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <GreenwoodMississippiHowToStartPage />
}
