import PowderSpringsGeorgiaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Powder Springs, Georgia (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Powder Springs, Georgia. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Powder Springs',
    'start vending business Powder Springs, Georgia',
    'Powder Springs vending permits',
    'vending machine locations Powder Springs',
    'Powder Springs vending course',
    'vending business guide Georgia'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/powder-springs-georgia'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Powder Springs, Georgia',
    description: 'Step-by-step guide with licensing, locations, and vending course for Powder Springs, Georgia',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/powder-springs-georgia',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Powder Springs, Georgia'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Powder Springs, Georgia',
    description: 'Complete guide with licensing, locations, and vending course for Powder Springs, Georgia'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <PowderSpringsGeorgiaHowToStartPage />
}
