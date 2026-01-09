import ColumbusNebraskaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Columbus, Nebraska (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Columbus, Nebraska. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Columbus',
    'start vending business Columbus, Nebraska',
    'Columbus vending permits',
    'vending machine locations Columbus',
    'Columbus vending course',
    'vending business guide Nebraska'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/columbus-nebraska'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Columbus, Nebraska',
    description: 'Step-by-step guide with licensing, locations, and vending course for Columbus, Nebraska',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/columbus-nebraska',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Columbus, Nebraska'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Columbus, Nebraska',
    description: 'Complete guide with licensing, locations, and vending course for Columbus, Nebraska'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <ColumbusNebraskaHowToStartPage />
}
