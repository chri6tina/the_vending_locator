import OpelousasLouisianaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Opelousas, Louisiana (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Opelousas, Louisiana. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Opelousas',
    'start vending business Opelousas, Louisiana',
    'Opelousas vending permits',
    'vending machine locations Opelousas',
    'Opelousas vending course',
    'vending business guide Louisiana'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/opelousas-louisiana'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Opelousas, Louisiana',
    description: 'Step-by-step guide with licensing, locations, and vending course for Opelousas, Louisiana',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/opelousas-louisiana',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Opelousas, Louisiana'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Opelousas, Louisiana',
    description: 'Complete guide with licensing, locations, and vending course for Opelousas, Louisiana'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <OpelousasLouisianaHowToStartPage />
}
