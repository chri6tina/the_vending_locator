import WestlandMichiganHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Westland, Michigan (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Westland, Michigan. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Westland',
    'start vending business Westland Michigan',
    'Westland vending permits',
    'vending machine locations Westland',
    'Westland vending course',
    'vending business guide Michigan'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/westland-michigan'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Westland, Michigan',
    description: 'Step-by-step guide with licensing, locations, and vending course for Westland, Michigan',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/westland-michigan',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Westland, Michigan'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Westland, Michigan',
    description: 'Complete guide with licensing, locations, and vending course for Westland, Michigan'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <WestlandMichiganHowToStartPage />
}
