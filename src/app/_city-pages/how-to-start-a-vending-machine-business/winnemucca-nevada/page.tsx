import WinnemuccaNevadaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Winnemucca, Nevada (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Winnemucca, Nevada. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Winnemucca',
    'start vending business Winnemucca, Nevada',
    'Winnemucca vending permits',
    'vending machine locations Winnemucca',
    'Winnemucca vending course',
    'vending business guide Nevada'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/winnemucca-nevada'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Winnemucca, Nevada',
    description: 'Step-by-step guide with licensing, locations, and vending course for Winnemucca, Nevada',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/winnemucca-nevada',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Winnemucca, Nevada'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Winnemucca, Nevada',
    description: 'Complete guide with licensing, locations, and vending course for Winnemucca, Nevada'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <WinnemuccaNevadaHowToStartPage />
}
