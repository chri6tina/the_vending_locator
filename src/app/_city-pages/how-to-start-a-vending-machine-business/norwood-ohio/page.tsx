import NorwoodOhioHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Norwood, Ohio (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Norwood, Ohio. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Norwood',
    'start vending business Norwood, Ohio',
    'Norwood vending permits',
    'vending machine locations Norwood',
    'Norwood vending course',
    'vending business guide Ohio'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/norwood-ohio'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Norwood, Ohio',
    description: 'Step-by-step guide with licensing, locations, and vending course for Norwood, Ohio',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/norwood-ohio',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Norwood, Ohio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Norwood, Ohio',
    description: 'Complete guide with licensing, locations, and vending course for Norwood, Ohio'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <NorwoodOhioHowToStartPage />
}
