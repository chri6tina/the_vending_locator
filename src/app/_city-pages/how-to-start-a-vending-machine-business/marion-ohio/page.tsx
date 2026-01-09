import MarionOhioHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Marion, Ohio (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Marion, Ohio. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Marion',
    'start vending business Marion, Ohio',
    'Marion vending permits',
    'vending machine locations Marion',
    'Marion vending course',
    'vending business guide Ohio'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/marion-ohio'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Marion, Ohio',
    description: 'Step-by-step guide with licensing, locations, and vending course for Marion, Ohio',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/marion-ohio',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Marion, Ohio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Marion, Ohio',
    description: 'Complete guide with licensing, locations, and vending course for Marion, Ohio'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <MarionOhioHowToStartPage />
}
