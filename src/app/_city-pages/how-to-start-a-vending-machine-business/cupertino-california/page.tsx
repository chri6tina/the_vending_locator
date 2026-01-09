import CupertinoCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Cupertino, California (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Cupertino, C. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Cupertino',
    'start vending business Cupertino California',
    'Cupertino vending permits',
    'vending machine locations Cupertino',
    'Cupertino vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/cupertino-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Cupertino, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for Cupertino, C',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/cupertino-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Cupertino, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Cupertino, California',
    description: 'Complete guide with licensing, locations, and vending course for Cupertino, C'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <CupertinoCaliforniaHowToStartPage />
}



