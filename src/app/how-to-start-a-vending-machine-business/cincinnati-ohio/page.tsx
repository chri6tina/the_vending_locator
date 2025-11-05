import CincinnatiOhioHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Cincinnati, Ohio (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Cincinnati, Ohio. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Cincinnati',
    'start vending business Cincinnati Ohio',
    'Cincinnati vending permits',
    'vending machine locations Cincinnati',
    'Cincinnati vending course',
    'vending business guide Ohio'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/cincinnati-ohio'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Cincinnati, Ohio',
    description: 'Step-by-step guide with licensing, locations, and vending course for Cincinnati, Ohio',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/cincinnati-ohio',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Cincinnati, Ohio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Cincinnati, Ohio',
    description: 'Complete guide with licensing, locations, and vending course for Cincinnati, Ohio'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <CincinnatiOhioHowToStartPage />
}
