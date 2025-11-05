import MontgomeryAlabamaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Montgomery, Alabama (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Montgomery, Alabama. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Montgomery',
    'start vending business Montgomery Alabama',
    'Montgomery vending permits',
    'vending machine locations Montgomery',
    'Montgomery vending course',
    'vending business guide Alabama'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/montgomery-alabama'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Montgomery, Alabama',
    description: 'Step-by-step guide with licensing, locations, and vending course for Montgomery, Alabama',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/montgomery-alabama',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Montgomery, Alabama'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Montgomery, Alabama',
    description: 'Complete guide with licensing, locations, and vending course for Montgomery, Alabama'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <MontgomeryAlabamaHowToStartPage />
}
