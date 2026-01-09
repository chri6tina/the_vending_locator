import NomeAlaskaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Nome, Alaska (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Nome, Alaska. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Nome',
    'start vending business Nome, Alaska',
    'Nome vending permits',
    'vending machine locations Nome',
    'Nome vending course',
    'vending business guide Alaska'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/nome-alaska'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Nome, Alaska',
    description: 'Step-by-step guide with licensing, locations, and vending course for Nome, Alaska',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/nome-alaska',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Nome, Alaska'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Nome, Alaska',
    description: 'Complete guide with licensing, locations, and vending course for Nome, Alaska'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <NomeAlaskaHowToStartPage />
}
