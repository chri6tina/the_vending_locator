import WestDesMoinesIowaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in West Des Moines, Iowa (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in West Des Moines, Iowa. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business West Des Moines',
    'start vending business West Des Moines, Iowa',
    'West Des Moines vending permits',
    'vending machine locations West Des Moines',
    'West Des Moines vending course',
    'vending business guide Iowa'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/west-des-moines'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in West Des Moines, Iowa',
    description: 'Step-by-step guide with licensing, locations, and vending course for West Des Moines, Iowa',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/west-des-moines',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in West Des Moines, Iowa'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in West Des Moines, Iowa',
    description: 'Complete guide with licensing, locations, and vending course for West Des Moines, Iowa'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <WestDesMoinesIowaHowToStartPage />
}
