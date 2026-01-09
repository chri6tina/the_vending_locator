import ChaskaMinnesotaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Chaska, Minnesota (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Chaska, Minnesota. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Chaska',
    'start vending business Chaska, Minnesota',
    'Chaska vending permits',
    'vending machine locations Chaska',
    'Chaska vending course',
    'vending business guide Minnesota'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/chaska-minnesota'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Chaska, Minnesota',
    description: 'Step-by-step guide with licensing, locations, and vending course for Chaska, Minnesota',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/chaska-minnesota',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Chaska, Minnesota'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Chaska, Minnesota',
    description: 'Complete guide with licensing, locations, and vending course for Chaska, Minnesota'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <ChaskaMinnesotaHowToStartPage />
}
