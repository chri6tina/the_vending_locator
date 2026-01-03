import WasillaAlaskaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Wasilla, Alaska (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Wasilla, Alaska. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Wasilla',
    'start vending business Wasilla Alaska',
    'Wasilla vending permits',
    'vending machine locations Wasilla',
    'Wasilla vending course',
    'vending business guide Alaska'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/wasilla-alaska'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Wasilla, Alaska',
    description: 'Step-by-step guide with licensing, locations, and vending course for Wasilla, Alaska',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/wasilla-alaska',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Wasilla, Alaska'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Wasilla, Alaska',
    description: 'Complete guide with licensing, locations, and vending course for Wasilla, Alaska'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <WasillaAlaskaHowToStartPage />
}
