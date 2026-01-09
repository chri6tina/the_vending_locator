import AndersonIndianaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Anderson, Indiana (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Anderson, Indiana. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Anderson',
    'start vending business Anderson, Indiana',
    'Anderson vending permits',
    'vending machine locations Anderson',
    'Anderson vending course',
    'vending business guide Indiana'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/anderson-indiana'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Anderson, Indiana',
    description: 'Step-by-step guide with licensing, locations, and vending course for Anderson, Indiana',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/anderson-indiana',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Anderson, Indiana'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Anderson, Indiana',
    description: 'Complete guide with licensing, locations, and vending course for Anderson, Indiana'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <AndersonIndianaHowToStartPage />
}
