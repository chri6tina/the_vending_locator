import WestPlainsMissouriHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in West Plains, Missouri (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in West Plains, Missouri. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business West Plains',
    'start vending business West Plains, Missouri',
    'West Plains vending permits',
    'vending machine locations West Plains',
    'West Plains vending course',
    'vending business guide Missouri'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/west-plains-missouri'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in West Plains, Missouri',
    description: 'Step-by-step guide with licensing, locations, and vending course for West Plains, Missouri',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/west-plains-missouri',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in West Plains, Missouri'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in West Plains, Missouri',
    description: 'Complete guide with licensing, locations, and vending course for West Plains, Missouri'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <WestPlainsMissouriHowToStartPage />
}
