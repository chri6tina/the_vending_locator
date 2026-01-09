import AdaOklahomaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Ada, Oklahoma (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Ada, Oklahoma. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Ada',
    'start vending business Ada, Oklahoma',
    'Ada vending permits',
    'vending machine locations Ada',
    'Ada vending course',
    'vending business guide Oklahoma'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/ada-oklahoma'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Ada, Oklahoma',
    description: 'Step-by-step guide with licensing, locations, and vending course for Ada, Oklahoma',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/ada-oklahoma',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Ada, Oklahoma'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Ada, Oklahoma',
    description: 'Complete guide with licensing, locations, and vending course for Ada, Oklahoma'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <AdaOklahomaHowToStartPage />
}
