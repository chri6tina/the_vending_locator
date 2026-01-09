import BoiseIdahoHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Boise, Idaho (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Boise, Idaho. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Boise',
    'start vending business Boise Idaho',
    'Boise vending permits',
    'vending machine locations Boise',
    'Boise vending course',
    'vending business guide Idaho'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/boise-idaho'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Boise, Idaho',
    description: 'Step-by-step guide with licensing, locations, and vending course for Boise, Idaho',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/boise-idaho',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Boise, Idaho'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Boise, Idaho',
    description: 'Complete guide with licensing, locations, and vending course for Boise, Idaho'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <BoiseIdahoHowToStartPage />
}
