import ChampaignUrbanaIllinoisHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Champaign-Urbana, Illinois (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Champaign-Urbana, Illinois. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Champaign-Urbana',
    'start vending business Champaign-Urbana Illinois',
    'Champaign-Urbana vending permits',
    'vending machine locations Champaign-Urbana',
    'Champaign-Urbana vending course',
    'vending business guide Illinois'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/champaign-urbana-illinois'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Champaign-Urbana, Illinois',
    description: 'Step-by-step guide with licensing, locations, and vending course for Champaign-Urbana, Illinois',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/champaign-urbana-illinois',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Champaign-Urbana, Illinois'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Champaign-Urbana, Illinois',
    description: 'Complete guide with licensing, locations, and vending course for Champaign-Urbana, Illinois'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <ChampaignUrbanaIllinoisHowToStartPage />
}
