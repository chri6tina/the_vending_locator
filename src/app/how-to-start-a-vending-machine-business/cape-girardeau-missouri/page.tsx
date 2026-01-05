import CapeGirardeauMissouriHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Cape Girardeau, Missouri (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Cape Girardeau, Missouri. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Cape Girardeau',
    'start vending business Cape Girardeau, Missouri',
    'Cape Girardeau vending permits',
    'vending machine locations Cape Girardeau',
    'Cape Girardeau vending course',
    'vending business guide Missouri'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/cape-girardeau-missouri'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Cape Girardeau, Missouri',
    description: 'Step-by-step guide with licensing, locations, and vending course for Cape Girardeau, Missouri',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/cape-girardeau-missouri',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Cape Girardeau, Missouri'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Cape Girardeau, Missouri',
    description: 'Complete guide with licensing, locations, and vending course for Cape Girardeau, Missouri'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <CapeGirardeauMissouriHowToStartPage />
}
