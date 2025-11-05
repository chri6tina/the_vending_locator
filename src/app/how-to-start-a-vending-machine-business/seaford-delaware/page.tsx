import SeafordDelawareHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Seaford, Delaware (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Seaford, Delaware. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Seaford',
    'start vending business Seaford Delaware',
    'Seaford vending permits',
    'vending machine locations Seaford',
    'Seaford vending course',
    'vending business guide Delaware'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/seaford-delaware'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Seaford, Delaware',
    description: 'Step-by-step guide with licensing, locations, and vending course for Seaford, Delaware',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/seaford-delaware',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Seaford, Delaware'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Seaford, Delaware',
    description: 'Complete guide with licensing, locations, and vending course for Seaford, Delaware'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <SeafordDelawareHowToStartPage />
}
