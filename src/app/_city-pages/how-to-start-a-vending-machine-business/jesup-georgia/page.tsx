import JesupGeorgiaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Jesup, Georgia (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Jesup, Georgia. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Jesup',
    'start vending business Jesup, Georgia',
    'Jesup vending permits',
    'vending machine locations Jesup',
    'Jesup vending course',
    'vending business guide Georgia'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/jesup-georgia'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Jesup, Georgia',
    description: 'Step-by-step guide with licensing, locations, and vending course for Jesup, Georgia',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/jesup-georgia',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Jesup, Georgia'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Jesup, Georgia',
    description: 'Complete guide with licensing, locations, and vending course for Jesup, Georgia'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <JesupGeorgiaHowToStartPage />
}
