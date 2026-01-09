import GallatinTennesseeHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Gallatin, Tennessee (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Gallatin, Tennessee. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Gallatin',
    'start vending business Gallatin, Tennessee',
    'Gallatin vending permits',
    'vending machine locations Gallatin',
    'Gallatin vending course',
    'vending business guide Tennessee'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/gallatin-tennessee'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Gallatin, Tennessee',
    description: 'Step-by-step guide with licensing, locations, and vending course for Gallatin, Tennessee',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/gallatin-tennessee',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Gallatin, Tennessee'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Gallatin, Tennessee',
    description: 'Complete guide with licensing, locations, and vending course for Gallatin, Tennessee'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <GallatinTennesseeHowToStartPage />
}
