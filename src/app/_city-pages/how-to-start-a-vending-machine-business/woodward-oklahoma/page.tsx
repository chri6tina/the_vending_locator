import WoodwardOklahomaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Woodward, Oklahoma (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Woodward, Oklahoma. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Woodward',
    'start vending business Woodward, Oklahoma',
    'Woodward vending permits',
    'vending machine locations Woodward',
    'Woodward vending course',
    'vending business guide Oklahoma'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/woodward-oklahoma'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Woodward, Oklahoma',
    description: 'Step-by-step guide with licensing, locations, and vending course for Woodward, Oklahoma',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/woodward-oklahoma',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Woodward, Oklahoma'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Woodward, Oklahoma',
    description: 'Complete guide with licensing, locations, and vending course for Woodward, Oklahoma'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <WoodwardOklahomaHowToStartPage />
}
