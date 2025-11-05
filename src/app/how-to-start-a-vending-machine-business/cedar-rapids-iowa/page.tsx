import CedarRapidsIowaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Cedar Rapids, Iowa (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Cedar Rapids, Iowa. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Cedar Rapids',
    'start vending business Cedar Rapids Iowa',
    'Cedar Rapids vending permits',
    'vending machine locations Cedar Rapids',
    'Cedar Rapids vending course',
    'vending business guide Iowa'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/cedar-rapids-iowa'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Cedar Rapids, Iowa',
    description: 'Step-by-step guide with licensing, locations, and vending course for Cedar Rapids, Iowa',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/cedar-rapids-iowa',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Cedar Rapids, Iowa'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Cedar Rapids, Iowa',
    description: 'Complete guide with licensing, locations, and vending course for Cedar Rapids, Iowa'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <CedarRapidsIowaHowToStartPage />
}
