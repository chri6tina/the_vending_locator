import CrawfordsvilleIndianaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Crawfordsville, Indiana (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Crawfordsville, Indiana. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Crawfordsville',
    'start vending business Crawfordsville, Indiana',
    'Crawfordsville vending permits',
    'vending machine locations Crawfordsville',
    'Crawfordsville vending course',
    'vending business guide Indiana'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/crawfordsville-indiana'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Crawfordsville, Indiana',
    description: 'Step-by-step guide with licensing, locations, and vending course for Crawfordsville, Indiana',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/crawfordsville-indiana',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Crawfordsville, Indiana'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Crawfordsville, Indiana',
    description: 'Complete guide with licensing, locations, and vending course for Crawfordsville, Indiana'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <CrawfordsvilleIndianaHowToStartPage />
}
