import BrainerdMinnesotaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Brainerd, Minnesota (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Brainerd, Minnesota. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Brainerd',
    'start vending business Brainerd, Minnesota',
    'Brainerd vending permits',
    'vending machine locations Brainerd',
    'Brainerd vending course',
    'vending business guide Minnesota'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/brainerd-minnesota'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Brainerd, Minnesota',
    description: 'Step-by-step guide with licensing, locations, and vending course for Brainerd, Minnesota',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/brainerd-minnesota',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Brainerd, Minnesota'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Brainerd, Minnesota',
    description: 'Complete guide with licensing, locations, and vending course for Brainerd, Minnesota'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <BrainerdMinnesotaHowToStartPage />
}
