import CullmanAlabamaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Cullman, Alabama (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Cullman, Alabama. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Cullman',
    'start vending business Cullman, Alabama',
    'Cullman vending permits',
    'vending machine locations Cullman',
    'Cullman vending course',
    'vending business guide Alabama'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/cullman-alabama'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Cullman, Alabama',
    description: 'Step-by-step guide with licensing, locations, and vending course for Cullman, Alabama',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/cullman-alabama',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Cullman, Alabama'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Cullman, Alabama',
    description: 'Complete guide with licensing, locations, and vending course for Cullman, Alabama'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <CullmanAlabamaHowToStartPage />
}
