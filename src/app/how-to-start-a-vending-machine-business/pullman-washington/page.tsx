import PullmanWashingtonHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Pullman, Washington (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Pullman, Washington. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Pullman',
    'start vending business Pullman, Washington',
    'Pullman vending permits',
    'vending machine locations Pullman',
    'Pullman vending course',
    'vending business guide Washington'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/pullman-washington'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Pullman, Washington',
    description: 'Step-by-step guide with licensing, locations, and vending course for Pullman, Washington',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/pullman-washington',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Pullman, Washington'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Pullman, Washington',
    description: 'Complete guide with licensing, locations, and vending course for Pullman, Washington'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <PullmanWashingtonHowToStartPage />
}
