import BastropLouisianaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Bastrop, Louisiana (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Bastrop, Louisiana. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Bastrop',
    'start vending business Bastrop, Louisiana',
    'Bastrop vending permits',
    'vending machine locations Bastrop',
    'Bastrop vending course',
    'vending business guide Louisiana'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/bastrop-louisiana'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Bastrop, Louisiana',
    description: 'Step-by-step guide with licensing, locations, and vending course for Bastrop, Louisiana',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/bastrop-louisiana',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Bastrop, Louisiana'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Bastrop, Louisiana',
    description: 'Complete guide with licensing, locations, and vending course for Bastrop, Louisiana'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <BastropLouisianaHowToStartPage />
}
