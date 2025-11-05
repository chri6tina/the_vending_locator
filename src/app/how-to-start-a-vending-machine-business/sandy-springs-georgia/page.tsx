import SandySpringsGeorgiaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Sandy Springs, Georgia (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Sandy Springs, Georgia. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Sandy Springs',
    'start vending business Sandy Springs Georgia',
    'Sandy Springs vending permits',
    'vending machine locations Sandy Springs',
    'Sandy Springs vending course',
    'vending business guide Georgia'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/sandy-springs-georgia'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Sandy Springs, Georgia',
    description: 'Step-by-step guide with licensing, locations, and vending course for Sandy Springs, Georgia',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/sandy-springs-georgia',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Sandy Springs, Georgia'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Sandy Springs, Georgia',
    description: 'Complete guide with licensing, locations, and vending course for Sandy Springs, Georgia'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <SandySpringsGeorgiaHowToStartPage />
}
