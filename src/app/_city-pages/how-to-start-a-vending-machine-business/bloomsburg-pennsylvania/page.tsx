import BloomsburgPennsylvaniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Bloomsburg, Pennsylvania (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Bloomsburg, Pennsylvania. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Bloomsburg',
    'start vending business Bloomsburg, Pennsylvania',
    'Bloomsburg vending permits',
    'vending machine locations Bloomsburg',
    'Bloomsburg vending course',
    'vending business guide Pennsylvania'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/bloomsburg-pennsylvania'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Bloomsburg, Pennsylvania',
    description: 'Step-by-step guide with licensing, locations, and vending course for Bloomsburg, Pennsylvania',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/bloomsburg-pennsylvania',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Bloomsburg, Pennsylvania'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Bloomsburg, Pennsylvania',
    description: 'Complete guide with licensing, locations, and vending course for Bloomsburg, Pennsylvania'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <BloomsburgPennsylvaniaHowToStartPage />
}
