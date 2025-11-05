import SterlingHeightsMichiganHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Sterling Heights, Michigan (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Sterling Heights, Michigan. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Sterling Heights',
    'start vending business Sterling Heights Michigan',
    'Sterling Heights vending permits',
    'vending machine locations Sterling Heights',
    'Sterling Heights vending course',
    'vending business guide Michigan'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/sterling-heights-michigan'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Sterling Heights, Michigan',
    description: 'Step-by-step guide with licensing, locations, and vending course for Sterling Heights, Michigan',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/sterling-heights-michigan',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Sterling Heights, Michigan'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Sterling Heights, Michigan',
    description: 'Complete guide with licensing, locations, and vending course for Sterling Heights, Michigan'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <SterlingHeightsMichiganHowToStartPage />
}
