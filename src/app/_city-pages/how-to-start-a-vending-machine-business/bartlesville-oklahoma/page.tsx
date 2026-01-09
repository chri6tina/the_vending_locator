import BartlesvilleOklahomaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Bartlesville, Oklahoma (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Bartlesville, Oklahoma. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Bartlesville',
    'start vending business Bartlesville, Oklahoma',
    'Bartlesville vending permits',
    'vending machine locations Bartlesville',
    'Bartlesville vending course',
    'vending business guide Oklahoma'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/bartlesville-oklahoma'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Bartlesville, Oklahoma',
    description: 'Step-by-step guide with licensing, locations, and vending course for Bartlesville, Oklahoma',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/bartlesville-oklahoma',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Bartlesville, Oklahoma'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Bartlesville, Oklahoma',
    description: 'Complete guide with licensing, locations, and vending course for Bartlesville, Oklahoma'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <BartlesvilleOklahomaHowToStartPage />
}
