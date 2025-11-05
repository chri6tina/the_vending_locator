import TulsaOklahomaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Tulsa, Oklahoma (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Tulsa, Oklahoma. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Tulsa',
    'start vending business Tulsa Oklahoma',
    'Tulsa vending permits',
    'vending machine locations Tulsa',
    'Tulsa vending course',
    'vending business guide Oklahoma'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/tulsa-oklahoma'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Tulsa, Oklahoma',
    description: 'Step-by-step guide with licensing, locations, and vending course for Tulsa, Oklahoma',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/tulsa-oklahoma',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Tulsa, Oklahoma'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Tulsa, Oklahoma',
    description: 'Complete guide with licensing, locations, and vending course for Tulsa, Oklahoma'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <TulsaOklahomaHowToStartPage />
}
