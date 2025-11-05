import ElginIllinoisHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Elgin, Illinois (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Elgin, Illinois. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Elgin',
    'start vending business Elgin Illinois',
    'Elgin vending permits',
    'vending machine locations Elgin',
    'Elgin vending course',
    'vending business guide Illinois'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/elgin-illinois'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Elgin, Illinois',
    description: 'Step-by-step guide with licensing, locations, and vending course for Elgin, Illinois',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/elgin-illinois',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Elgin, Illinois'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Elgin, Illinois',
    description: 'Complete guide with licensing, locations, and vending course for Elgin, Illinois'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <ElginIllinoisHowToStartPage />
}
