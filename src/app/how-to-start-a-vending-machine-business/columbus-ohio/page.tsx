import ColumbusOhioHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Columbus, Ohio (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Columbus, Ohio. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Columbus',
    'start vending business Columbus Ohio',
    'Columbus vending permits',
    'vending machine locations Columbus',
    'Columbus vending course',
    'vending business guide Ohio'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/columbus-ohio'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Columbus, Ohio',
    description: 'Step-by-step guide with licensing, locations, and vending course for Columbus, Ohio',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/columbus-ohio',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Columbus, Ohio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Columbus, Ohio',
    description: 'Complete guide with licensing, locations, and vending course for Columbus, Ohio'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <ColumbusOhioHowToStartPage />
}
