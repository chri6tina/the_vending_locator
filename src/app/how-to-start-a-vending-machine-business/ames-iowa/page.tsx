import AmesIowaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Ames, Iowa (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Ames, Iowa. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Ames',
    'start vending business Ames Iowa',
    'Ames vending permits',
    'vending machine locations Ames',
    'Ames vending course',
    'vending business guide Iowa'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/ames-iowa'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Ames, Iowa',
    description: 'Step-by-step guide with licensing, locations, and vending course for Ames, Iowa',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/ames-iowa',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Ames, Iowa'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Ames, Iowa',
    description: 'Complete guide with licensing, locations, and vending course for Ames, Iowa'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <AmesIowaHowToStartPage />
}
