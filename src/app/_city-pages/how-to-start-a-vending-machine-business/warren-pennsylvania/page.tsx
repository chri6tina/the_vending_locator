import WarrenPennsylvaniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Warren, Pennsylvania (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Warren, Pennsylvania. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Warren',
    'start vending business Warren, Pennsylvania',
    'Warren vending permits',
    'vending machine locations Warren',
    'Warren vending course',
    'vending business guide Pennsylvania'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/warren-pennsylvania'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Warren, Pennsylvania',
    description: 'Step-by-step guide with licensing, locations, and vending course for Warren, Pennsylvania',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/warren-pennsylvania',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Warren, Pennsylvania'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Warren, Pennsylvania',
    description: 'Complete guide with licensing, locations, and vending course for Warren, Pennsylvania'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <WarrenPennsylvaniaHowToStartPage />
}
