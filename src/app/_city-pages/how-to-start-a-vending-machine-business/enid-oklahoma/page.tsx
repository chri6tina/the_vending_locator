import EnidOklahomaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Enid, Oklahoma (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Enid, Oklahoma. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Enid',
    'start vending business Enid, Oklahoma',
    'Enid vending permits',
    'vending machine locations Enid',
    'Enid vending course',
    'vending business guide Oklahoma'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/enid-oklahoma'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Enid, Oklahoma',
    description: 'Step-by-step guide with licensing, locations, and vending course for Enid, Oklahoma',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/enid-oklahoma',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Enid, Oklahoma'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Enid, Oklahoma',
    description: 'Complete guide with licensing, locations, and vending course for Enid, Oklahoma'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <EnidOklahomaHowToStartPage />
}
