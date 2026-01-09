import TahlequahOklahomaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Tahlequah, Oklahoma (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Tahlequah, Oklahoma. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Tahlequah',
    'start vending business Tahlequah, Oklahoma',
    'Tahlequah vending permits',
    'vending machine locations Tahlequah',
    'Tahlequah vending course',
    'vending business guide Oklahoma'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/tahlequah-oklahoma'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Tahlequah, Oklahoma',
    description: 'Step-by-step guide with licensing, locations, and vending course for Tahlequah, Oklahoma',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/tahlequah-oklahoma',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Tahlequah, Oklahoma'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Tahlequah, Oklahoma',
    description: 'Complete guide with licensing, locations, and vending course for Tahlequah, Oklahoma'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <TahlequahOklahomaHowToStartPage />
}
