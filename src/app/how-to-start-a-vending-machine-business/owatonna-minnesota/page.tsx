import OwatonnaMinnesotaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Owatonna, Minnesota (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Owatonna, Minnesota. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Owatonna',
    'start vending business Owatonna, Minnesota',
    'Owatonna vending permits',
    'vending machine locations Owatonna',
    'Owatonna vending course',
    'vending business guide Minnesota'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/owatonna-minnesota'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Owatonna, Minnesota',
    description: 'Step-by-step guide with licensing, locations, and vending course for Owatonna, Minnesota',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/owatonna-minnesota',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Owatonna, Minnesota'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Owatonna, Minnesota',
    description: 'Complete guide with licensing, locations, and vending course for Owatonna, Minnesota'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <OwatonnaMinnesotaHowToStartPage />
}
