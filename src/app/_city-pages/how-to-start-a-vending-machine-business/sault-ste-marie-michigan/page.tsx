import SaultSteMarieMichiganHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Sault Ste. Marie, Michigan (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Sault Ste. Marie, Michigan. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Sault Ste. Marie',
    'start vending business Sault Ste. Marie, Michigan',
    'Sault Ste. Marie vending permits',
    'vending machine locations Sault Ste. Marie',
    'Sault Ste. Marie vending course',
    'vending business guide Michigan'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/sault-ste-marie-michigan'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Sault Ste. Marie, Michigan',
    description: 'Step-by-step guide with licensing, locations, and vending course for Sault Ste. Marie, Michigan',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/sault-ste-marie-michigan',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Sault Ste. Marie, Michigan'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Sault Ste. Marie, Michigan',
    description: 'Complete guide with licensing, locations, and vending course for Sault Ste. Marie, Michigan'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <SaultSteMarieMichiganHowToStartPage />
}
