import EverettWashingtonHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Everett, Washington (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Everett, Washington. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Everett',
    'start vending business Everett Washington',
    'Everett vending permits',
    'vending machine locations Everett',
    'Everett vending course',
    'vending business guide Washington'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/everett-washington'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Everett, Washington',
    description: 'Step-by-step guide with licensing, locations, and vending course for Everett, Washington',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/everett-washington',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Everett, Washington'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Everett, Washington',
    description: 'Complete guide with licensing, locations, and vending course for Everett, Washington'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <EverettWashingtonHowToStartPage />
}
