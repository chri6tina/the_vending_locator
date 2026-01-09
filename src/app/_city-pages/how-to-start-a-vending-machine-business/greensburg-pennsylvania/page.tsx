import GreensburgPennsylvaniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Greensburg, Pennsylvania (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Greensburg, Pennsylvania. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Greensburg',
    'start vending business Greensburg, Pennsylvania',
    'Greensburg vending permits',
    'vending machine locations Greensburg',
    'Greensburg vending course',
    'vending business guide Pennsylvania'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/greensburg-pennsylvania'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Greensburg, Pennsylvania',
    description: 'Step-by-step guide with licensing, locations, and vending course for Greensburg, Pennsylvania',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/greensburg-pennsylvania',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Greensburg, Pennsylvania'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Greensburg, Pennsylvania',
    description: 'Complete guide with licensing, locations, and vending course for Greensburg, Pennsylvania'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <GreensburgPennsylvaniaHowToStartPage />
}
