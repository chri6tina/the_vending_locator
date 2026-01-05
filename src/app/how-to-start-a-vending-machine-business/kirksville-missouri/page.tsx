import KirksvilleMissouriHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Kirksville, Missouri (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Kirksville, Missouri. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Kirksville',
    'start vending business Kirksville, Missouri',
    'Kirksville vending permits',
    'vending machine locations Kirksville',
    'Kirksville vending course',
    'vending business guide Missouri'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/kirksville-missouri'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Kirksville, Missouri',
    description: 'Step-by-step guide with licensing, locations, and vending course for Kirksville, Missouri',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/kirksville-missouri',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Kirksville, Missouri'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Kirksville, Missouri',
    description: 'Complete guide with licensing, locations, and vending course for Kirksville, Missouri'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <KirksvilleMissouriHowToStartPage />
}
