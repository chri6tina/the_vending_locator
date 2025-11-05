import MissoulaMontanaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Missoula, Montana (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Missoula, Montana. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Missoula',
    'start vending business Missoula Montana',
    'Missoula vending permits',
    'vending machine locations Missoula',
    'Missoula vending course',
    'vending business guide Montana'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/missoula-montana'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Missoula, Montana',
    description: 'Step-by-step guide with licensing, locations, and vending course for Missoula, Montana',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/missoula-montana',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Missoula, Montana'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Missoula, Montana',
    description: 'Complete guide with licensing, locations, and vending course for Missoula, Montana'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <MissoulaMontanaHowToStartPage />
}
