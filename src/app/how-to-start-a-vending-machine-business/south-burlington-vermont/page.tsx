import SouthBurlingtonVermontHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in South Burlington, Vermont (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in South Burlington, Vermont. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business South Burlington',
    'start vending business South Burlington Vermont',
    'South Burlington vending permits',
    'vending machine locations South Burlington',
    'South Burlington vending course',
    'vending business guide Vermont'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/south-burlington-vermont'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in South Burlington, Vermont',
    description: 'Step-by-step guide with licensing, locations, and vending course for South Burlington, Vermont',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/south-burlington-vermont',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in South Burlington, Vermont'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in South Burlington, Vermont',
    description: 'Complete guide with licensing, locations, and vending course for South Burlington, Vermont'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <SouthBurlingtonVermontHowToStartPage />
}
