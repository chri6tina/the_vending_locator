import CapitolHillWashingtonDcHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Capitol Hill, Washington DC (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Capitol Hill, Washington DC. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Capitol Hill',
    'start vending business Capitol Hill Washington DC',
    'Capitol Hill vending permits',
    'vending machine locations Capitol Hill',
    'Capitol Hill vending course',
    'vending business guide Washington DC'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/capitol-hill-washington-dc'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Capitol Hill, Washington DC',
    description: 'Step-by-step guide with licensing, locations, and vending course for Capitol Hill, Washington DC',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/capitol-hill-washington-dc',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Capitol Hill, Washington DC'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Capitol Hill, Washington DC',
    description: 'Complete guide with licensing, locations, and vending course for Capitol Hill, Washington DC'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <CapitolHillWashingtonDcHowToStartPage />
}
