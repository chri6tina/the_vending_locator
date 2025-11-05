import ShreveportLouisianaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Shreveport, Louisiana (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Shreveport, Louisiana. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Shreveport',
    'start vending business Shreveport Louisiana',
    'Shreveport vending permits',
    'vending machine locations Shreveport',
    'Shreveport vending course',
    'vending business guide Louisiana'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/shreveport-louisiana'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Shreveport, Louisiana',
    description: 'Step-by-step guide with licensing, locations, and vending course for Shreveport, Louisiana',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/shreveport-louisiana',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Shreveport, Louisiana'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Shreveport, Louisiana',
    description: 'Complete guide with licensing, locations, and vending course for Shreveport, Louisiana'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <ShreveportLouisianaHowToStartPage />
}
