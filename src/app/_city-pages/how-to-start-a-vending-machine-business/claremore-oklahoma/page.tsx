import ClaremoreOklahomaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Claremore, Oklahoma (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Claremore, Oklahoma. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Claremore',
    'start vending business Claremore, Oklahoma',
    'Claremore vending permits',
    'vending machine locations Claremore',
    'Claremore vending course',
    'vending business guide Oklahoma'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/claremore-oklahoma'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Claremore, Oklahoma',
    description: 'Step-by-step guide with licensing, locations, and vending course for Claremore, Oklahoma',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/claremore-oklahoma',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Claremore, Oklahoma'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Claremore, Oklahoma',
    description: 'Complete guide with licensing, locations, and vending course for Claremore, Oklahoma'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <ClaremoreOklahomaHowToStartPage />
}
