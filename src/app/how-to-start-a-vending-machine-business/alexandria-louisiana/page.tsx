import AlexandriaLouisianaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Alexandria, Louisiana (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Alexandria, Louisiana. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Alexandria',
    'start vending business Alexandria Louisiana',
    'Alexandria vending permits',
    'vending machine locations Alexandria',
    'Alexandria vending course',
    'vending business guide Louisiana'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/alexandria-louisiana'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Alexandria, Louisiana',
    description: 'Step-by-step guide with licensing, locations, and vending course for Alexandria, Louisiana',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/alexandria-louisiana',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Alexandria, Louisiana'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Alexandria, Louisiana',
    description: 'Complete guide with licensing, locations, and vending course for Alexandria, Louisiana'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <AlexandriaLouisianaHowToStartPage />
}
