import MesquiteNevadaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Mesquite, Nevada (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Mesquite, Nevada. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Mesquite',
    'start vending business Mesquite, Nevada',
    'Mesquite vending permits',
    'vending machine locations Mesquite',
    'Mesquite vending course',
    'vending business guide Nevada'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/mesquite-nevada'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Mesquite, Nevada',
    description: 'Step-by-step guide with licensing, locations, and vending course for Mesquite, Nevada',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/mesquite-nevada',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Mesquite, Nevada'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Mesquite, Nevada',
    description: 'Complete guide with licensing, locations, and vending course for Mesquite, Nevada'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <MesquiteNevadaHowToStartPage />
}
