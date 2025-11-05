import PawtucketRhodeIslandHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Pawtucket, Rhode Island (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Pawtucket, Rhode Island. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Pawtucket',
    'start vending business Pawtucket Rhode Island',
    'Pawtucket vending permits',
    'vending machine locations Pawtucket',
    'Pawtucket vending course',
    'vending business guide Rhode Island'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/pawtucket-rhode-island'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Pawtucket, Rhode Island',
    description: 'Step-by-step guide with licensing, locations, and vending course for Pawtucket, Rhode Island',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/pawtucket-rhode-island',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Pawtucket, Rhode Island'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Pawtucket, Rhode Island',
    description: 'Complete guide with licensing, locations, and vending course for Pawtucket, Rhode Island'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <PawtucketRhodeIslandHowToStartPage />
}
