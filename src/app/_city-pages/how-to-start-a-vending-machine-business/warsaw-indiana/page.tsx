import WarsawIndianaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Warsaw, Indiana (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Warsaw, Indiana. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Warsaw',
    'start vending business Warsaw, Indiana',
    'Warsaw vending permits',
    'vending machine locations Warsaw',
    'Warsaw vending course',
    'vending business guide Indiana'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/warsaw-indiana'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Warsaw, Indiana',
    description: 'Step-by-step guide with licensing, locations, and vending course for Warsaw, Indiana',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/warsaw-indiana',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Warsaw, Indiana'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Warsaw, Indiana',
    description: 'Complete guide with licensing, locations, and vending course for Warsaw, Indiana'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <WarsawIndianaHowToStartPage />
}
