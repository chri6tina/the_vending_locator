import JacksonMississippiHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Jackson, Mississippi (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Jackson, Mississippi. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Jackson',
    'start vending business Jackson Mississippi',
    'Jackson vending permits',
    'vending machine locations Jackson',
    'Jackson vending course',
    'vending business guide Mississippi'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/jackson-mississippi'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Jackson, Mississippi',
    description: 'Step-by-step guide with licensing, locations, and vending course for Jackson, Mississippi',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/jackson-mississippi',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Jackson, Mississippi'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Jackson, Mississippi',
    description: 'Complete guide with licensing, locations, and vending course for Jackson, Mississippi'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <JacksonMississippiHowToStartPage />
}
