import CouncilBluffsIowaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Council Bluffs, Iowa (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Council Bluffs, Iowa. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Council Bluffs',
    'start vending business Council Bluffs, Iowa',
    'Council Bluffs vending permits',
    'vending machine locations Council Bluffs',
    'Council Bluffs vending course',
    'vending business guide Iowa'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/council-bluffs-iowa'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Council Bluffs, Iowa',
    description: 'Step-by-step guide with licensing, locations, and vending course for Council Bluffs, Iowa',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/council-bluffs-iowa',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Council Bluffs, Iowa'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Council Bluffs, Iowa',
    description: 'Complete guide with licensing, locations, and vending course for Council Bluffs, Iowa'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <CouncilBluffsIowaHowToStartPage />
}
