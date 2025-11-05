import PhiladelphiaPennsylvaniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Philadelphia, Pennsylvania (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Philadelphia, Pennsylvania. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Philadelphia',
    'start vending business Philadelphia Pennsylvania',
    'Philadelphia vending permits',
    'vending machine locations Philadelphia',
    'Philadelphia vending course',
    'vending business guide Pennsylvania'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/philadelphia-pennsylvania'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Philadelphia, Pennsylvania',
    description: 'Step-by-step guide with licensing, locations, and vending course for Philadelphia, Pennsylvania',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/philadelphia-pennsylvania',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Philadelphia, Pennsylvania'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Philadelphia, Pennsylvania',
    description: 'Complete guide with licensing, locations, and vending course for Philadelphia, Pennsylvania'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <PhiladelphiaPennsylvaniaHowToStartPage />
}
