import HesperiaCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Hesperia, California (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Hesperia, C. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Hesperia',
    'start vending business Hesperia California',
    'Hesperia vending permits',
    'vending machine locations Hesperia',
    'Hesperia vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/hesperia-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Hesperia, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for Hesperia, C',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/hesperia-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Hesperia, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Hesperia, California',
    description: 'Complete guide with licensing, locations, and vending course for Hesperia, C'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <HesperiaCaliforniaHowToStartPage />
}



