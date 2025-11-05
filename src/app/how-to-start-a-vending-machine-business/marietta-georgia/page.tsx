import MariettaGeorgiaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Marietta, Georgia (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Marietta, Georgia. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Marietta',
    'start vending business Marietta Georgia',
    'Marietta vending permits',
    'vending machine locations Marietta',
    'Marietta vending course',
    'vending business guide Georgia'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/marietta-georgia'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Marietta, Georgia',
    description: 'Step-by-step guide with licensing, locations, and vending course for Marietta, Georgia',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/marietta-georgia',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Marietta, Georgia'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Marietta, Georgia',
    description: 'Complete guide with licensing, locations, and vending course for Marietta, Georgia'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <MariettaGeorgiaHowToStartPage />
}
