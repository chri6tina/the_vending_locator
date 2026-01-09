import DurantOklahomaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Durant, Oklahoma (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Durant, Oklahoma. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Durant',
    'start vending business Durant, Oklahoma',
    'Durant vending permits',
    'vending machine locations Durant',
    'Durant vending course',
    'vending business guide Oklahoma'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/durant-oklahoma'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Durant, Oklahoma',
    description: 'Step-by-step guide with licensing, locations, and vending course for Durant, Oklahoma',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/durant-oklahoma',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Durant, Oklahoma'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Durant, Oklahoma',
    description: 'Complete guide with licensing, locations, and vending course for Durant, Oklahoma'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <DurantOklahomaHowToStartPage />
}
