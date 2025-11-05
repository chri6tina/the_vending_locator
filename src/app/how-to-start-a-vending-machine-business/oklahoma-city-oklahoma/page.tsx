import OklahomaCityOklahomaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Oklahoma City, Oklahoma (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Oklahoma City, Oklahoma. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Oklahoma City',
    'start vending business Oklahoma City Oklahoma',
    'Oklahoma City vending permits',
    'vending machine locations Oklahoma City',
    'Oklahoma City vending course',
    'vending business guide Oklahoma'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/oklahoma-city-oklahoma'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Oklahoma City, Oklahoma',
    description: 'Step-by-step guide with licensing, locations, and vending course for Oklahoma City, Oklahoma',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/oklahoma-city-oklahoma',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Oklahoma City, Oklahoma'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Oklahoma City, Oklahoma',
    description: 'Complete guide with licensing, locations, and vending course for Oklahoma City, Oklahoma'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <OklahomaCityOklahomaHowToStartPage />
}
