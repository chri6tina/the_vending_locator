import ChattanoogaTennesseeHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Chattanooga, Tennessee (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Chattanooga, Tennessee. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Chattanooga',
    'start vending business Chattanooga Tennessee',
    'Chattanooga vending permits',
    'vending machine locations Chattanooga',
    'Chattanooga vending course',
    'vending business guide Tennessee'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/chattanooga-tennessee'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Chattanooga, Tennessee',
    description: 'Step-by-step guide with licensing, locations, and vending course for Chattanooga, Tennessee',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/chattanooga-tennessee',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Chattanooga, Tennessee'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Chattanooga, Tennessee',
    description: 'Complete guide with licensing, locations, and vending course for Chattanooga, Tennessee'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <ChattanoogaTennesseeHowToStartPage />
}
