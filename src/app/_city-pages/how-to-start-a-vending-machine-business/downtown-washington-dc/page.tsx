import DowntownWashingtonDcHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Downtown DC, Washington DC (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Downtown DC, Washington DC. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Downtown DC',
    'start vending business Downtown DC Washington DC',
    'Downtown DC vending permits',
    'vending machine locations Downtown DC',
    'Downtown DC vending course',
    'vending business guide Washington DC'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/downtown-washington-dc'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Downtown DC, Washington DC',
    description: 'Step-by-step guide with licensing, locations, and vending course for Downtown DC, Washington DC',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/downtown-washington-dc',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Downtown DC, Washington DC'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Downtown DC, Washington DC',
    description: 'Complete guide with licensing, locations, and vending course for Downtown DC, Washington DC'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <DowntownWashingtonDcHowToStartPage />
}
