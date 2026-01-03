import SilverSpringMarylandHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Silver Spring, Maryland (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Silver Spring, Maryland. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Silver Spring',
    'start vending business Silver Spring Maryland',
    'Silver Spring vending permits',
    'vending machine locations Silver Spring',
    'Silver Spring vending course',
    'vending business guide Maryland'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/silver-spring-maryland'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Silver Spring, Maryland',
    description: 'Step-by-step guide with licensing, locations, and vending course for Silver Spring, Maryland',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/silver-spring-maryland',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Silver Spring, Maryland'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Silver Spring, Maryland',
    description: 'Complete guide with licensing, locations, and vending course for Silver Spring, Maryland'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <SilverSpringMarylandHowToStartPage />
}
