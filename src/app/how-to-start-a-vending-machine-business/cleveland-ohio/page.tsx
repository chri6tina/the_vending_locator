import ClevelandOhioHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Cleveland, Ohio (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Cleveland, Ohio. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Cleveland',
    'start vending business Cleveland Ohio',
    'Cleveland vending permits',
    'vending machine locations Cleveland',
    'Cleveland vending course',
    'vending business guide Ohio'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/cleveland-ohio'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Cleveland, Ohio',
    description: 'Step-by-step guide with licensing, locations, and vending course for Cleveland, Ohio',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/cleveland-ohio',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Cleveland, Ohio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Cleveland, Ohio',
    description: 'Complete guide with licensing, locations, and vending course for Cleveland, Ohio'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <ClevelandOhioHowToStartPage />
}
