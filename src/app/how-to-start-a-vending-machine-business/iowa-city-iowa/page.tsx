import IowaCityIowaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Iowa City, Iowa (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Iowa City, Iowa. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Iowa City',
    'start vending business Iowa City Iowa',
    'Iowa City vending permits',
    'vending machine locations Iowa City',
    'Iowa City vending course',
    'vending business guide Iowa'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/iowa-city-iowa'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Iowa City, Iowa',
    description: 'Step-by-step guide with licensing, locations, and vending course for Iowa City, Iowa',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/iowa-city-iowa',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Iowa City, Iowa'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Iowa City, Iowa',
    description: 'Complete guide with licensing, locations, and vending course for Iowa City, Iowa'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <IowaCityIowaHowToStartPage />
}
