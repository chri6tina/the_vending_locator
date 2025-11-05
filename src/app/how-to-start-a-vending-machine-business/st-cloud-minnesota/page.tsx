import StCloudMinnesotaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in St. Cloud, Minnesota (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in St. Cloud, Minnesota. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business St. Cloud',
    'start vending business St. Cloud Minnesota',
    'St. Cloud vending permits',
    'vending machine locations St. Cloud',
    'St. Cloud vending course',
    'vending business guide Minnesota'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/st-cloud-minnesota'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in St. Cloud, Minnesota',
    description: 'Step-by-step guide with licensing, locations, and vending course for St. Cloud, Minnesota',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/st-cloud-minnesota',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in St. Cloud, Minnesota'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in St. Cloud, Minnesota',
    description: 'Complete guide with licensing, locations, and vending course for St. Cloud, Minnesota'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <StCloudMinnesotaHowToStartPage />
}
