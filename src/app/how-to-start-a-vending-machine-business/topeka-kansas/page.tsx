import TopekaKansasHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Topeka, Kansas (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Topeka, Kansas. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Topeka',
    'start vending business Topeka Kansas',
    'Topeka vending permits',
    'vending machine locations Topeka',
    'Topeka vending course',
    'vending business guide Kansas'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/topeka-kansas'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Topeka, Kansas',
    description: 'Step-by-step guide with licensing, locations, and vending course for Topeka, Kansas',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/topeka-kansas',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Topeka, Kansas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Topeka, Kansas',
    description: 'Complete guide with licensing, locations, and vending course for Topeka, Kansas'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <TopekaKansasHowToStartPage />
}
