import ParmaOhioHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Parma, Ohio (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Parma, Ohio. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Parma',
    'start vending business Parma Ohio',
    'Parma vending permits',
    'vending machine locations Parma',
    'Parma vending course',
    'vending business guide Ohio'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/parma-ohio'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Parma, Ohio',
    description: 'Step-by-step guide with licensing, locations, and vending course for Parma, Ohio',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/parma-ohio',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Parma, Ohio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Parma, Ohio',
    description: 'Complete guide with licensing, locations, and vending course for Parma, Ohio'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <ParmaOhioHowToStartPage />
}
