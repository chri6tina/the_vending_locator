import MandanNorthDakotaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Mandan, North Dakota (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Mandan, North Dakota. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Mandan',
    'start vending business Mandan, North Dakota',
    'Mandan vending permits',
    'vending machine locations Mandan',
    'Mandan vending course',
    'vending business guide North Dakota'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/mandan-north-dakota'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Mandan, North Dakota',
    description: 'Step-by-step guide with licensing, locations, and vending course for Mandan, North Dakota',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/mandan-north-dakota',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Mandan, North Dakota'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Mandan, North Dakota',
    description: 'Complete guide with licensing, locations, and vending course for Mandan, North Dakota'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <MandanNorthDakotaHowToStartPage />
}
