import BellefontaineOhioHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Bellefontaine, Ohio (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Bellefontaine, Ohio. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Bellefontaine',
    'start vending business Bellefontaine, Ohio',
    'Bellefontaine vending permits',
    'vending machine locations Bellefontaine',
    'Bellefontaine vending course',
    'vending business guide Ohio'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/bellefontaine-ohio'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Bellefontaine, Ohio',
    description: 'Step-by-step guide with licensing, locations, and vending course for Bellefontaine, Ohio',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/bellefontaine-ohio',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Bellefontaine, Ohio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Bellefontaine, Ohio',
    description: 'Complete guide with licensing, locations, and vending course for Bellefontaine, Ohio'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <BellefontaineOhioHowToStartPage />
}
