import WilkesBarrePennsylvaniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Wilkes-Barre, Pennsylvania (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Wilkes-Barre, Pennsylvania. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Wilkes-Barre',
    'start vending business Wilkes-Barre, Pennsylvania',
    'Wilkes-Barre vending permits',
    'vending machine locations Wilkes-Barre',
    'Wilkes-Barre vending course',
    'vending business guide Pennsylvania'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/wilkes-barre-pennsylvania'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Wilkes-Barre, Pennsylvania',
    description: 'Step-by-step guide with licensing, locations, and vending course for Wilkes-Barre, Pennsylvania',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/wilkes-barre-pennsylvania',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Wilkes-Barre, Pennsylvania'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Wilkes-Barre, Pennsylvania',
    description: 'Complete guide with licensing, locations, and vending course for Wilkes-Barre, Pennsylvania'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <WilkesBarrePennsylvaniaHowToStartPage />
}
