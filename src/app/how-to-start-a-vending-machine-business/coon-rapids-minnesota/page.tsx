import CoonRapidsMinnesotaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Coon Rapids, Minnesota (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Coon Rapids, Minnesota. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Coon Rapids',
    'start vending business Coon Rapids, Minnesota',
    'Coon Rapids vending permits',
    'vending machine locations Coon Rapids',
    'Coon Rapids vending course',
    'vending business guide Minnesota'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/coon-rapids-minnesota'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Coon Rapids, Minnesota',
    description: 'Step-by-step guide with licensing, locations, and vending course for Coon Rapids, Minnesota',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/coon-rapids-minnesota',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Coon Rapids, Minnesota'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Coon Rapids, Minnesota',
    description: 'Complete guide with licensing, locations, and vending course for Coon Rapids, Minnesota'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <CoonRapidsMinnesotaHowToStartPage />
}
