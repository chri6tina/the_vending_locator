import LaramieWyomingHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Laramie, Wyoming (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Laramie, Wyoming. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Laramie',
    'start vending business Laramie Wyoming',
    'Laramie vending permits',
    'vending machine locations Laramie',
    'Laramie vending course',
    'vending business guide Wyoming'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/laramie-wyoming'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Laramie, Wyoming',
    description: 'Step-by-step guide with licensing, locations, and vending course for Laramie, Wyoming',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/laramie-wyoming',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Laramie, Wyoming'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Laramie, Wyoming',
    description: 'Complete guide with licensing, locations, and vending course for Laramie, Wyoming'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <LaramieWyomingHowToStartPage />
}
