import IdahoFallsIdahoHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Idaho Falls, Idaho (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Idaho Falls, Idaho. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Idaho Falls',
    'start vending business Idaho Falls Idaho',
    'Idaho Falls vending permits',
    'vending machine locations Idaho Falls',
    'Idaho Falls vending course',
    'vending business guide Idaho'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/idaho-falls-idaho'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Idaho Falls, Idaho',
    description: 'Step-by-step guide with licensing, locations, and vending course for Idaho Falls, Idaho',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/idaho-falls-idaho',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Idaho Falls, Idaho'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Idaho Falls, Idaho',
    description: 'Complete guide with licensing, locations, and vending course for Idaho Falls, Idaho'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <IdahoFallsIdahoHowToStartPage />
}
