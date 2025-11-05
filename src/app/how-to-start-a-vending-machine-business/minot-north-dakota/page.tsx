import MinotNorthDakotaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Minot, North Dakota (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Minot, North Dakota. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Minot',
    'start vending business Minot North Dakota',
    'Minot vending permits',
    'vending machine locations Minot',
    'Minot vending course',
    'vending business guide North Dakota'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/minot-north-dakota'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Minot, North Dakota',
    description: 'Step-by-step guide with licensing, locations, and vending course for Minot, North Dakota',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/minot-north-dakota',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Minot, North Dakota'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Minot, North Dakota',
    description: 'Complete guide with licensing, locations, and vending course for Minot, North Dakota'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <MinotNorthDakotaHowToStartPage />
}
