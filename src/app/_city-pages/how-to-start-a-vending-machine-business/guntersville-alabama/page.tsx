import GuntersvilleAlabamaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Guntersville, Alabama (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Guntersville, Alabama. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Guntersville',
    'start vending business Guntersville, Alabama',
    'Guntersville vending permits',
    'vending machine locations Guntersville',
    'Guntersville vending course',
    'vending business guide Alabama'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/guntersville-alabama'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Guntersville, Alabama',
    description: 'Step-by-step guide with licensing, locations, and vending course for Guntersville, Alabama',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/guntersville-alabama',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Guntersville, Alabama'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Guntersville, Alabama',
    description: 'Complete guide with licensing, locations, and vending course for Guntersville, Alabama'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <GuntersvilleAlabamaHowToStartPage />
}
