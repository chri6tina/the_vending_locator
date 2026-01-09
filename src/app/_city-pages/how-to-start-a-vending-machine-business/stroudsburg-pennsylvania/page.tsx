import StroudsburgPennsylvaniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Stroudsburg, Pennsylvania (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Stroudsburg, Pennsylvania. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Stroudsburg',
    'start vending business Stroudsburg, Pennsylvania',
    'Stroudsburg vending permits',
    'vending machine locations Stroudsburg',
    'Stroudsburg vending course',
    'vending business guide Pennsylvania'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/stroudsburg-pennsylvania'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Stroudsburg, Pennsylvania',
    description: 'Step-by-step guide with licensing, locations, and vending course for Stroudsburg, Pennsylvania',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/stroudsburg-pennsylvania',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Stroudsburg, Pennsylvania'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Stroudsburg, Pennsylvania',
    description: 'Complete guide with licensing, locations, and vending course for Stroudsburg, Pennsylvania'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <StroudsburgPennsylvaniaHowToStartPage />
}
