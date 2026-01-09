import LockHavenPennsylvaniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Lock Haven, Pennsylvania (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Lock Haven, Pennsylvania. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Lock Haven',
    'start vending business Lock Haven, Pennsylvania',
    'Lock Haven vending permits',
    'vending machine locations Lock Haven',
    'Lock Haven vending course',
    'vending business guide Pennsylvania'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/lock-haven-pennsylvania'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Lock Haven, Pennsylvania',
    description: 'Step-by-step guide with licensing, locations, and vending course for Lock Haven, Pennsylvania',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/lock-haven-pennsylvania',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Lock Haven, Pennsylvania'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Lock Haven, Pennsylvania',
    description: 'Complete guide with licensing, locations, and vending course for Lock Haven, Pennsylvania'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <LockHavenPennsylvaniaHowToStartPage />
}
