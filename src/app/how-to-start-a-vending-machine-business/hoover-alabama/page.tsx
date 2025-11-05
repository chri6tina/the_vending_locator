import HooverAlabamaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Hoover, Alabama (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Hoover, Alabama. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Hoover',
    'start vending business Hoover Alabama',
    'Hoover vending permits',
    'vending machine locations Hoover',
    'Hoover vending course',
    'vending business guide Alabama'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/hoover-alabama'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Hoover, Alabama',
    description: 'Step-by-step guide with licensing, locations, and vending course for Hoover, Alabama',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/hoover-alabama',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Hoover, Alabama'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Hoover, Alabama',
    description: 'Complete guide with licensing, locations, and vending course for Hoover, Alabama'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <HooverAlabamaHowToStartPage />
}
