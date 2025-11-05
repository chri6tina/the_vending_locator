import DesMoinesIowaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Des Moines, Iowa (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Des Moines, Iowa. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Des Moines',
    'start vending business Des Moines Iowa',
    'Des Moines vending permits',
    'vending machine locations Des Moines',
    'Des Moines vending course',
    'vending business guide Iowa'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/des-moines-iowa'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Des Moines, Iowa',
    description: 'Step-by-step guide with licensing, locations, and vending course for Des Moines, Iowa',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/des-moines-iowa',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Des Moines, Iowa'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Des Moines, Iowa',
    description: 'Complete guide with licensing, locations, and vending course for Des Moines, Iowa'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <DesMoinesIowaHowToStartPage />
}
