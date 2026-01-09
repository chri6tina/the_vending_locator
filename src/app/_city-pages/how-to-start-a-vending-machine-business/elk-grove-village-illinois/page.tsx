import ElkGroveVillageIllinoisHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Elk Grove Village, Illinois (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Elk Grove Village, Illinois. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Elk Grove Village',
    'start vending business Elk Grove Village, Illinois',
    'Elk Grove Village vending permits',
    'vending machine locations Elk Grove Village',
    'Elk Grove Village vending course',
    'vending business guide Illinois'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/elk-grove-village-illinois'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Elk Grove Village, Illinois',
    description: 'Step-by-step guide with licensing, locations, and vending course for Elk Grove Village, Illinois',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/elk-grove-village-illinois',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Elk Grove Village, Illinois'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Elk Grove Village, Illinois',
    description: 'Complete guide with licensing, locations, and vending course for Elk Grove Village, Illinois'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <ElkGroveVillageIllinoisHowToStartPage />
}
