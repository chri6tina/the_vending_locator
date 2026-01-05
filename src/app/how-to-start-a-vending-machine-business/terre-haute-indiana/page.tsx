import TerreHauteIndianaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Terre Haute, Indiana (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Terre Haute, Indiana. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Terre Haute',
    'start vending business Terre Haute, Indiana',
    'Terre Haute vending permits',
    'vending machine locations Terre Haute',
    'Terre Haute vending course',
    'vending business guide Indiana'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/terre-haute-indiana'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Terre Haute, Indiana',
    description: 'Step-by-step guide with licensing, locations, and vending course for Terre Haute, Indiana',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/terre-haute-indiana',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Terre Haute, Indiana'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Terre Haute, Indiana',
    description: 'Complete guide with licensing, locations, and vending course for Terre Haute, Indiana'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <TerreHauteIndianaHowToStartPage />
}
