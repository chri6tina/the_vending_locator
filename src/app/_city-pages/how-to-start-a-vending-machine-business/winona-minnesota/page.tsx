import WinonaMinnesotaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Winona, Minnesota (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Winona, Minnesota. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Winona',
    'start vending business Winona, Minnesota',
    'Winona vending permits',
    'vending machine locations Winona',
    'Winona vending course',
    'vending business guide Minnesota'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/winona-minnesota'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Winona, Minnesota',
    description: 'Step-by-step guide with licensing, locations, and vending course for Winona, Minnesota',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/winona-minnesota',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Winona, Minnesota'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Winona, Minnesota',
    description: 'Complete guide with licensing, locations, and vending course for Winona, Minnesota'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <WinonaMinnesotaHowToStartPage />
}
