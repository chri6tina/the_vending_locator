import AnsoniaConnecticutHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Ansonia, Connecticut (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Ansonia, Connecticut. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Ansonia',
    'start vending business Ansonia, Connecticut',
    'Ansonia vending permits',
    'vending machine locations Ansonia',
    'Ansonia vending course',
    'vending business guide Connecticut'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/ansonia-connecticut'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Ansonia, Connecticut',
    description: 'Step-by-step guide with licensing, locations, and vending course for Ansonia, Connecticut',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/ansonia-connecticut',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Ansonia, Connecticut'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Ansonia, Connecticut',
    description: 'Complete guide with licensing, locations, and vending course for Ansonia, Connecticut'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <AnsoniaConnecticutHowToStartPage />
}
