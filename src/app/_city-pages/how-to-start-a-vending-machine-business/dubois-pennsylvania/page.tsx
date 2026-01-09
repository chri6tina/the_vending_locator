import DuBoisPennsylvaniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in DuBois, Pennsylvania (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in DuBois, Pennsylvania. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business DuBois',
    'start vending business DuBois, Pennsylvania',
    'DuBois vending permits',
    'vending machine locations DuBois',
    'DuBois vending course',
    'vending business guide Pennsylvania'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/dubois-pennsylvania'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in DuBois, Pennsylvania',
    description: 'Step-by-step guide with licensing, locations, and vending course for DuBois, Pennsylvania',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/dubois-pennsylvania',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in DuBois, Pennsylvania'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in DuBois, Pennsylvania',
    description: 'Complete guide with licensing, locations, and vending course for DuBois, Pennsylvania'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <DuBoisPennsylvaniaHowToStartPage />
}
