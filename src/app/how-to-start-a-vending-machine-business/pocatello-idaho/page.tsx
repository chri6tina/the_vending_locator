import PocatelloIdahoHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Pocatello, Idaho (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Pocatello, Idaho. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Pocatello',
    'start vending business Pocatello Idaho',
    'Pocatello vending permits',
    'vending machine locations Pocatello',
    'Pocatello vending course',
    'vending business guide Idaho'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/pocatello-idaho'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Pocatello, Idaho',
    description: 'Step-by-step guide with licensing, locations, and vending course for Pocatello, Idaho',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/pocatello-idaho',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Pocatello, Idaho'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Pocatello, Idaho',
    description: 'Complete guide with licensing, locations, and vending course for Pocatello, Idaho'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <PocatelloIdahoHowToStartPage />
}
