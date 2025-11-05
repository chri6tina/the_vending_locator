import BirminghamAlabamaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Birmingham, Alabama (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Birmingham, Alabama. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Birmingham',
    'start vending business Birmingham Alabama',
    'Birmingham vending permits',
    'vending machine locations Birmingham',
    'Birmingham vending course',
    'vending business guide Alabama'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/birmingham-alabama'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Birmingham, Alabama',
    description: 'Step-by-step guide with licensing, locations, and vending course for Birmingham, Alabama',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/birmingham-alabama',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Birmingham, Alabama'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Birmingham, Alabama',
    description: 'Complete guide with licensing, locations, and vending course for Birmingham, Alabama'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <BirminghamAlabamaHowToStartPage />
}
