import OverlandParkKansasHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Overland Park, Kansas (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Overland Park, Kansas. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Overland Park',
    'start vending business Overland Park Kansas',
    'Overland Park vending permits',
    'vending machine locations Overland Park',
    'Overland Park vending course',
    'vending business guide Kansas'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/overland-park-kansas'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Overland Park, Kansas',
    description: 'Step-by-step guide with licensing, locations, and vending course for Overland Park, Kansas',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/overland-park-kansas',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Overland Park, Kansas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Overland Park, Kansas',
    description: 'Complete guide with licensing, locations, and vending course for Overland Park, Kansas'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <OverlandParkKansasHowToStartPage />
}
