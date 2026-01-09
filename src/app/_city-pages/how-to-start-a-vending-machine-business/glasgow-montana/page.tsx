import GlasgowMontanaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Glasgow, Montana (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Glasgow, Montana. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Glasgow',
    'start vending business Glasgow, Montana',
    'Glasgow vending permits',
    'vending machine locations Glasgow',
    'Glasgow vending course',
    'vending business guide Montana'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/glasgow-montana'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Glasgow, Montana',
    description: 'Step-by-step guide with licensing, locations, and vending course for Glasgow, Montana',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/glasgow-montana',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Glasgow, Montana'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Glasgow, Montana',
    description: 'Complete guide with licensing, locations, and vending course for Glasgow, Montana'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <GlasgowMontanaHowToStartPage />
}
