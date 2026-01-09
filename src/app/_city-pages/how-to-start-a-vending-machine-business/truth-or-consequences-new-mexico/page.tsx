import TruthorConsequencesNewMexicoHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Truth or Consequences, New Mexico (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Truth or Consequences, New Mexico. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Truth or Consequences',
    'start vending business Truth or Consequences, New Mexico',
    'Truth or Consequences vending permits',
    'vending machine locations Truth or Consequences',
    'Truth or Consequences vending course',
    'vending business guide New Mexico'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/truth-or-consequences-new-mexico'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Truth or Consequences, New Mexico',
    description: 'Step-by-step guide with licensing, locations, and vending course for Truth or Consequences, New Mexico',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/truth-or-consequences-new-mexico',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Truth or Consequences, New Mexico'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Truth or Consequences, New Mexico',
    description: 'Complete guide with licensing, locations, and vending course for Truth or Consequences, New Mexico'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <TruthorConsequencesNewMexicoHowToStartPage />
}
