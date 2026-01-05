import PoplarBluffMissouriHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Poplar Bluff, Missouri (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Poplar Bluff, Missouri. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Poplar Bluff',
    'start vending business Poplar Bluff, Missouri',
    'Poplar Bluff vending permits',
    'vending machine locations Poplar Bluff',
    'Poplar Bluff vending course',
    'vending business guide Missouri'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/poplar-bluff-missouri'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Poplar Bluff, Missouri',
    description: 'Step-by-step guide with licensing, locations, and vending course for Poplar Bluff, Missouri',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/poplar-bluff-missouri',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Poplar Bluff, Missouri'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Poplar Bluff, Missouri',
    description: 'Complete guide with licensing, locations, and vending course for Poplar Bluff, Missouri'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <PoplarBluffMissouriHowToStartPage />
}
