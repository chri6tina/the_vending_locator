import AltoonaPennsylvaniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Altoona, Pennsylvania (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Altoona, Pennsylvania. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Altoona',
    'start vending business Altoona, Pennsylvania',
    'Altoona vending permits',
    'vending machine locations Altoona',
    'Altoona vending course',
    'vending business guide Pennsylvania'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/altoona-pennsylvania'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Altoona, Pennsylvania',
    description: 'Step-by-step guide with licensing, locations, and vending course for Altoona, Pennsylvania',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/altoona-pennsylvania',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Altoona, Pennsylvania'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Altoona, Pennsylvania',
    description: 'Complete guide with licensing, locations, and vending course for Altoona, Pennsylvania'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <AltoonaPennsylvaniaHowToStartPage />
}
