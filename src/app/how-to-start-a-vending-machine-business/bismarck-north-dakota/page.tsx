import BismarckNorthDakotaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Bismarck, North Dakota (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Bismarck, North Dakota. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Bismarck',
    'start vending business Bismarck North Dakota',
    'Bismarck vending permits',
    'vending machine locations Bismarck',
    'Bismarck vending course',
    'vending business guide North Dakota'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/bismarck-north-dakota'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Bismarck, North Dakota',
    description: 'Step-by-step guide with licensing, locations, and vending course for Bismarck, North Dakota',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/bismarck-north-dakota',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Bismarck, North Dakota'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Bismarck, North Dakota',
    description: 'Complete guide with licensing, locations, and vending course for Bismarck, North Dakota'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <BismarckNorthDakotaHowToStartPage />
}
