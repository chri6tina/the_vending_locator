import BroomfieldColoradoHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Broomfield, Colorado (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Broomfield, C. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Broomfield',
    'start vending business Broomfield Colorado',
    'Broomfield vending permits',
    'vending machine locations Broomfield',
    'Broomfield vending course',
    'vending business guide Colorado'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/broomfield-colorado'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Broomfield, Colorado',
    description: 'Step-by-step guide with licensing, locations, and vending course for Broomfield, C',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/broomfield-colorado',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Broomfield, Colorado'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Broomfield, Colorado',
    description: 'Complete guide with licensing, locations, and vending course for Broomfield, C'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <BroomfieldColoradoHowToStartPage />
}



