import GlendaleArizonaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Glendale, Arizona (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Glendale, Arizona. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Glendale',
    'start vending business Glendale Arizona',
    'Glendale vending permits',
    'vending machine locations Glendale',
    'Glendale vending course',
    'vending business guide Arizona'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/glendale-arizona'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Glendale, Arizona',
    description: 'Step-by-step guide with licensing, locations, and vending course for Glendale, Arizona',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/glendale-arizona',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Glendale, Arizona'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Glendale, Arizona',
    description: 'Complete guide with licensing, locations, and vending course for Glendale, Arizona'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <GlendaleArizonaHowToStartPage />
}
