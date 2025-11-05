import PatersonNewJerseyHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Paterson, New Jersey (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Paterson, New Jersey. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Paterson',
    'start vending business Paterson New Jersey',
    'Paterson vending permits',
    'vending machine locations Paterson',
    'Paterson vending course',
    'vending business guide New Jersey'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/paterson-new-jersey'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Paterson, New Jersey',
    description: 'Step-by-step guide with licensing, locations, and vending course for Paterson, New Jersey',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/paterson-new-jersey',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Paterson, New Jersey'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Paterson, New Jersey',
    description: 'Complete guide with licensing, locations, and vending course for Paterson, New Jersey'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <PatersonNewJerseyHowToStartPage />
}
