import AllentownPennsylvaniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Allentown, Pennsylvania (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Allentown, Pennsylvania. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Allentown',
    'start vending business Allentown Pennsylvania',
    'Allentown vending permits',
    'vending machine locations Allentown',
    'Allentown vending course',
    'vending business guide Pennsylvania'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/allentown-pennsylvania'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Allentown, Pennsylvania',
    description: 'Step-by-step guide with licensing, locations, and vending course for Allentown, Pennsylvania',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/allentown-pennsylvania',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Allentown, Pennsylvania'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Allentown, Pennsylvania',
    description: 'Complete guide with licensing, locations, and vending course for Allentown, Pennsylvania'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <AllentownPennsylvaniaHowToStartPage />
}
