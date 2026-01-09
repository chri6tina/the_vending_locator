import YpsilantiMichiganHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Ypsilanti, Michigan (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Ypsilanti, Michigan. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Ypsilanti',
    'start vending business Ypsilanti, Michigan',
    'Ypsilanti vending permits',
    'vending machine locations Ypsilanti',
    'Ypsilanti vending course',
    'vending business guide Michigan'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/ypsilanti-michigan'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Ypsilanti, Michigan',
    description: 'Step-by-step guide with licensing, locations, and vending course for Ypsilanti, Michigan',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/ypsilanti-michigan',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Ypsilanti, Michigan'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Ypsilanti, Michigan',
    description: 'Complete guide with licensing, locations, and vending course for Ypsilanti, Michigan'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <YpsilantiMichiganHowToStartPage />
}
