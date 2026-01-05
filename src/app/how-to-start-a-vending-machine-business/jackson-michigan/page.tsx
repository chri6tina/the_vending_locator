import JacksonMichiganHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Jackson, Michigan (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Jackson, Michigan. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Jackson',
    'start vending business Jackson, Michigan',
    'Jackson vending permits',
    'vending machine locations Jackson',
    'Jackson vending course',
    'vending business guide Michigan'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/jackson-michigan'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Jackson, Michigan',
    description: 'Step-by-step guide with licensing, locations, and vending course for Jackson, Michigan',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/jackson-michigan',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Jackson, Michigan'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Jackson, Michigan',
    description: 'Complete guide with licensing, locations, and vending course for Jackson, Michigan'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <JacksonMichiganHowToStartPage />
}
