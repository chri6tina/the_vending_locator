import AnchorageAlaskaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Anchorage, Alaska (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Anchorage, Alaska. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Anchorage',
    'start vending business Anchorage Alaska',
    'Anchorage vending permits',
    'vending machine locations Anchorage',
    'Anchorage vending course',
    'vending business guide Alaska'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/anchorage-alaska'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Anchorage, Alaska',
    description: 'Step-by-step guide with licensing, locations, and vending course for Anchorage, Alaska',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/anchorage-alaska',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Anchorage, Alaska'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Anchorage, Alaska',
    description: 'Complete guide with licensing, locations, and vending course for Anchorage, Alaska'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <AnchorageAlaskaHowToStartPage />
}
