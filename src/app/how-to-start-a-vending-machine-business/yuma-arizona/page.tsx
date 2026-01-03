import YumaArizonaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Yuma, Arizona (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Yuma, AZ. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Yuma',
    'start vending business Yuma Arizona',
    'Yuma vending permits',
    'vending machine locations Yuma',
    'Yuma vending course',
    'vending business guide Arizona'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/yuma-arizona'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Yuma, Arizona',
    description: 'Step-by-step guide with licensing, locations, and vending course for Yuma, AZ',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/yuma-arizona',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Yuma, Arizona'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Yuma, Arizona',
    description: 'Complete guide with licensing, locations, and vending course for Yuma, AZ'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <YumaArizonaHowToStartPage />
}



