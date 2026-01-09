import DillonMontanaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Dillon, Montana (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Dillon, Montana. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Dillon',
    'start vending business Dillon, Montana',
    'Dillon vending permits',
    'vending machine locations Dillon',
    'Dillon vending course',
    'vending business guide Montana'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/dillon-montana'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Dillon, Montana',
    description: 'Step-by-step guide with licensing, locations, and vending course for Dillon, Montana',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/dillon-montana',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Dillon, Montana'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Dillon, Montana',
    description: 'Complete guide with licensing, locations, and vending course for Dillon, Montana'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <DillonMontanaHowToStartPage />
}
