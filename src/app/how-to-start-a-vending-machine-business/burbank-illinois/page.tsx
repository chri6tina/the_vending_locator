import BurbankIllinoisHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Burbank, Illinois (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Burbank, Illinois. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Burbank',
    'start vending business Burbank, Illinois',
    'Burbank vending permits',
    'vending machine locations Burbank',
    'Burbank vending course',
    'vending business guide Illinois'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/burbank-illinois'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Burbank, Illinois',
    description: 'Step-by-step guide with licensing, locations, and vending course for Burbank, Illinois',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/burbank-illinois',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Burbank, Illinois'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Burbank, Illinois',
    description: 'Complete guide with licensing, locations, and vending course for Burbank, Illinois'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <BurbankIllinoisHowToStartPage />
}
