import KennewickWashingtonHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Kennewick, Washington (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Kennewick, Washington. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Kennewick',
    'start vending business Kennewick, Washington',
    'Kennewick vending permits',
    'vending machine locations Kennewick',
    'Kennewick vending course',
    'vending business guide Washington'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/kennewick-washington'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Kennewick, Washington',
    description: 'Step-by-step guide with licensing, locations, and vending course for Kennewick, Washington',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/kennewick-washington',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Kennewick, Washington'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Kennewick, Washington',
    description: 'Complete guide with licensing, locations, and vending course for Kennewick, Washington'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <KennewickWashingtonHowToStartPage />
}
