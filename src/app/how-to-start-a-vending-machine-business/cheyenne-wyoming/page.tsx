import CheyenneWyomingHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Cheyenne, Wyoming (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Cheyenne, Wyoming. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Cheyenne',
    'start vending business Cheyenne Wyoming',
    'Cheyenne vending permits',
    'vending machine locations Cheyenne',
    'Cheyenne vending course',
    'vending business guide Wyoming'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/cheyenne-wyoming'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Cheyenne, Wyoming',
    description: 'Step-by-step guide with licensing, locations, and vending course for Cheyenne, Wyoming',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/cheyenne-wyoming',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Cheyenne, Wyoming'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Cheyenne, Wyoming',
    description: 'Complete guide with licensing, locations, and vending course for Cheyenne, Wyoming'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <CheyenneWyomingHowToStartPage />
}
