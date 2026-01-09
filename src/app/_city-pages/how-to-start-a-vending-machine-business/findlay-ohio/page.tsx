import FindlayOhioHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Findlay, Ohio (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Findlay, Ohio. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Findlay',
    'start vending business Findlay, Ohio',
    'Findlay vending permits',
    'vending machine locations Findlay',
    'Findlay vending course',
    'vending business guide Ohio'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/findlay-ohio'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Findlay, Ohio',
    description: 'Step-by-step guide with licensing, locations, and vending course for Findlay, Ohio',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/findlay-ohio',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Findlay, Ohio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Findlay, Ohio',
    description: 'Complete guide with licensing, locations, and vending course for Findlay, Ohio'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <FindlayOhioHowToStartPage />
}
