import EmporiaKansasHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Emporia, Kansas (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Emporia, Kansas. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Emporia',
    'start vending business Emporia, Kansas',
    'Emporia vending permits',
    'vending machine locations Emporia',
    'Emporia vending course',
    'vending business guide Kansas'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/emporia-kansas'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Emporia, Kansas',
    description: 'Step-by-step guide with licensing, locations, and vending course for Emporia, Kansas',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/emporia-kansas',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Emporia, Kansas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Emporia, Kansas',
    description: 'Complete guide with licensing, locations, and vending course for Emporia, Kansas'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <EmporiaKansasHowToStartPage />
}
