import HerculesCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Hercules, California (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Hercules, California. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Hercules',
    'start vending business Hercules, California',
    'Hercules vending permits',
    'vending machine locations Hercules',
    'Hercules vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/hercules-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Hercules, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for Hercules, California',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/hercules-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Hercules, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Hercules, California',
    description: 'Complete guide with licensing, locations, and vending course for Hercules, California'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <HerculesCaliforniaHowToStartPage />
}
