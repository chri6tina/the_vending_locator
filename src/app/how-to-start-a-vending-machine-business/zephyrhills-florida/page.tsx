import ZephyrhillsFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Zephyrhills, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Zephyrhills, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Zephyrhills',
    'start vending business Zephyrhills, Florida',
    'Zephyrhills vending permits',
    'vending machine locations Zephyrhills',
    'Zephyrhills vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/zephyrhills-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Zephyrhills, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Zephyrhills, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/zephyrhills-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Zephyrhills, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Zephyrhills, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Zephyrhills, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <ZephyrhillsFloridaHowToStartPage />
}
