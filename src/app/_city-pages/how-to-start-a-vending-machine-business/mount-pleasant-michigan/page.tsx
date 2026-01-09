import MountPleasantMichiganHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Mount Pleasant, Michigan (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Mount Pleasant, Michigan. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Mount Pleasant',
    'start vending business Mount Pleasant, Michigan',
    'Mount Pleasant vending permits',
    'vending machine locations Mount Pleasant',
    'Mount Pleasant vending course',
    'vending business guide Michigan'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/mount-pleasant-michigan'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Mount Pleasant, Michigan',
    description: 'Step-by-step guide with licensing, locations, and vending course for Mount Pleasant, Michigan',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/mount-pleasant-michigan',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Mount Pleasant, Michigan'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Mount Pleasant, Michigan',
    description: 'Complete guide with licensing, locations, and vending course for Mount Pleasant, Michigan'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <MountPleasantMichiganHowToStartPage />
}
