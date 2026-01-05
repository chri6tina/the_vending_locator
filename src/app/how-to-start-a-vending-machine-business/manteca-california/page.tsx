import MantecaCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Manteca, California (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Manteca, California. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Manteca',
    'start vending business Manteca, California',
    'Manteca vending permits',
    'vending machine locations Manteca',
    'Manteca vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/manteca-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Manteca, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for Manteca, California',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/manteca-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Manteca, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Manteca, California',
    description: 'Complete guide with licensing, locations, and vending course for Manteca, California'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <MantecaCaliforniaHowToStartPage />
}
