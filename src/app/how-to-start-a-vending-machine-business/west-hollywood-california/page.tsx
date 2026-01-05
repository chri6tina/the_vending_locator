import WestHollywoodCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in West Hollywood, California (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in West Hollywood, California. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business West Hollywood',
    'start vending business West Hollywood, California',
    'West Hollywood vending permits',
    'vending machine locations West Hollywood',
    'West Hollywood vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/west-hollywood-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in West Hollywood, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for West Hollywood, California',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/west-hollywood-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in West Hollywood, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in West Hollywood, California',
    description: 'Complete guide with licensing, locations, and vending course for West Hollywood, California'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <WestHollywoodCaliforniaHowToStartPage />
}
