import CasperWyomingHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Casper, Wyoming (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Casper, Wyoming. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Casper',
    'start vending business Casper Wyoming',
    'Casper vending permits',
    'vending machine locations Casper',
    'Casper vending course',
    'vending business guide Wyoming'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/casper-wyoming'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Casper, Wyoming',
    description: 'Step-by-step guide with licensing, locations, and vending course for Casper, Wyoming',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/casper-wyoming',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Casper, Wyoming'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Casper, Wyoming',
    description: 'Complete guide with licensing, locations, and vending course for Casper, Wyoming'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <CasperWyomingHowToStartPage />
}
