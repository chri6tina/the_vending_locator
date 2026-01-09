import HannibalMissouriHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Hannibal, Missouri (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Hannibal, Missouri. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Hannibal',
    'start vending business Hannibal, Missouri',
    'Hannibal vending permits',
    'vending machine locations Hannibal',
    'Hannibal vending course',
    'vending business guide Missouri'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/hannibal-missouri'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Hannibal, Missouri',
    description: 'Step-by-step guide with licensing, locations, and vending course for Hannibal, Missouri',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/hannibal-missouri',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Hannibal, Missouri'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Hannibal, Missouri',
    description: 'Complete guide with licensing, locations, and vending course for Hannibal, Missouri'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <HannibalMissouriHowToStartPage />
}
