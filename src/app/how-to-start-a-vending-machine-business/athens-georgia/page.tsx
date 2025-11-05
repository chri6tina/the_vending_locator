import AthensGeorgiaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Athens, Georgia (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Athens, Georgia. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Athens',
    'start vending business Athens Georgia',
    'Athens vending permits',
    'vending machine locations Athens',
    'Athens vending course',
    'vending business guide Georgia'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/athens-georgia'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Athens, Georgia',
    description: 'Step-by-step guide with licensing, locations, and vending course for Athens, Georgia',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/athens-georgia',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Athens, Georgia'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Athens, Georgia',
    description: 'Complete guide with licensing, locations, and vending course for Athens, Georgia'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <AthensGeorgiaHowToStartPage />
}
