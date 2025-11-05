import DavenportIowaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Davenport, Iowa (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Davenport, Iowa. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Davenport',
    'start vending business Davenport Iowa',
    'Davenport vending permits',
    'vending machine locations Davenport',
    'Davenport vending course',
    'vending business guide Iowa'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/davenport-iowa'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Davenport, Iowa',
    description: 'Step-by-step guide with licensing, locations, and vending course for Davenport, Iowa',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/davenport-iowa',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Davenport, Iowa'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Davenport, Iowa',
    description: 'Complete guide with licensing, locations, and vending course for Davenport, Iowa'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <DavenportIowaHowToStartPage />
}
