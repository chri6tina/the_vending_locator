import OttumwaIowaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Ottumwa, Iowa (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Ottumwa, Iowa. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Ottumwa',
    'start vending business Ottumwa, Iowa',
    'Ottumwa vending permits',
    'vending machine locations Ottumwa',
    'Ottumwa vending course',
    'vending business guide Iowa'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/ottumwa-iowa'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Ottumwa, Iowa',
    description: 'Step-by-step guide with licensing, locations, and vending course for Ottumwa, Iowa',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/ottumwa-iowa',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Ottumwa, Iowa'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Ottumwa, Iowa',
    description: 'Complete guide with licensing, locations, and vending course for Ottumwa, Iowa'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <OttumwaIowaHowToStartPage />
}
