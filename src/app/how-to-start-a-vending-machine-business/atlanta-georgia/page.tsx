import AtlantaGeorgiaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Atlanta, Georgia (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Atlanta, Georgia. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Atlanta',
    'start vending business Atlanta Georgia',
    'Atlanta vending permits',
    'vending machine locations Atlanta',
    'Atlanta vending course',
    'vending business guide Georgia'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/atlanta-georgia'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Atlanta, Georgia',
    description: 'Step-by-step guide with licensing, locations, and vending course for Atlanta, Georgia',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/atlanta-georgia',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Atlanta, Georgia'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Atlanta, Georgia',
    description: 'Complete guide with licensing, locations, and vending course for Atlanta, Georgia'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <AtlantaGeorgiaHowToStartPage />
}
