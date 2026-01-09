import OxfordMississippiHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Oxford, Mississippi (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Oxford, Mississippi. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Oxford',
    'start vending business Oxford, Mississippi',
    'Oxford vending permits',
    'vending machine locations Oxford',
    'Oxford vending course',
    'vending business guide Mississippi'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/oxford-mississippi'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Oxford, Mississippi',
    description: 'Step-by-step guide with licensing, locations, and vending course for Oxford, Mississippi',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/oxford-mississippi',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Oxford, Mississippi'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Oxford, Mississippi',
    description: 'Complete guide with licensing, locations, and vending course for Oxford, Mississippi'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <OxfordMississippiHowToStartPage />
}
