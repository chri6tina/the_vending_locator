import JeffersonCityMontanaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Jefferson City, Montana (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Jefferson City, Montana. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Jefferson City',
    'start vending business Jefferson City, Montana',
    'Jefferson City vending permits',
    'vending machine locations Jefferson City',
    'Jefferson City vending course',
    'vending business guide Montana'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/jefferson-city-missouri'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Jefferson City, Montana',
    description: 'Step-by-step guide with licensing, locations, and vending course for Jefferson City, Montana',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/jefferson-city-missouri',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Jefferson City, Montana'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Jefferson City, Montana',
    description: 'Complete guide with licensing, locations, and vending course for Jefferson City, Montana'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <JeffersonCityMontanaHowToStartPage />
}
