import RosenbergTexasHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Rosenberg, Texas (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Rosenberg, Texas. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Rosenberg',
    'start vending business Rosenberg, Texas',
    'Rosenberg vending permits',
    'vending machine locations Rosenberg',
    'Rosenberg vending course',
    'vending business guide Texas'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/rosenberg-texas'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Rosenberg, Texas',
    description: 'Step-by-step guide with licensing, locations, and vending course for Rosenberg, Texas',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/rosenberg-texas',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Rosenberg, Texas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Rosenberg, Texas',
    description: 'Complete guide with licensing, locations, and vending course for Rosenberg, Texas'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <RosenbergTexasHowToStartPage />
}
