import ShowLowArizonaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Show Low, Arizona (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Show Low, Arizona. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Show Low',
    'start vending business Show Low, Arizona',
    'Show Low vending permits',
    'vending machine locations Show Low',
    'Show Low vending course',
    'vending business guide Arizona'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/show-low-arizona'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Show Low, Arizona',
    description: 'Step-by-step guide with licensing, locations, and vending course for Show Low, Arizona',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/show-low-arizona',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Show Low, Arizona'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Show Low, Arizona',
    description: 'Complete guide with licensing, locations, and vending course for Show Low, Arizona'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <ShowLowArizonaHowToStartPage />
}
