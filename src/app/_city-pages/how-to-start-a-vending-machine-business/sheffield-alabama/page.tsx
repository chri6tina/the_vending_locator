import SheffieldAlabamaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Sheffield, Alabama (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Sheffield, Alabama. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Sheffield',
    'start vending business Sheffield, Alabama',
    'Sheffield vending permits',
    'vending machine locations Sheffield',
    'Sheffield vending course',
    'vending business guide Alabama'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/sheffield-alabama'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Sheffield, Alabama',
    description: 'Step-by-step guide with licensing, locations, and vending course for Sheffield, Alabama',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/sheffield-alabama',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Sheffield, Alabama'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Sheffield, Alabama',
    description: 'Complete guide with licensing, locations, and vending course for Sheffield, Alabama'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <SheffieldAlabamaHowToStartPage />
}
