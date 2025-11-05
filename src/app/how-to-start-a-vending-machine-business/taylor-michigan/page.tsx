import TaylorMichiganHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Taylor, Michigan (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Taylor, Michigan. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Taylor',
    'start vending business Taylor Michigan',
    'Taylor vending permits',
    'vending machine locations Taylor',
    'Taylor vending course',
    'vending business guide Michigan'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/taylor-michigan'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Taylor, Michigan',
    description: 'Step-by-step guide with licensing, locations, and vending course for Taylor, Michigan',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/taylor-michigan',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Taylor, Michigan'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Taylor, Michigan',
    description: 'Complete guide with licensing, locations, and vending course for Taylor, Michigan'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <TaylorMichiganHowToStartPage />
}
