import GlenBurnieMarylandHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Glen Burnie, Maryland (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Glen Burnie, Maryland. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Glen Burnie',
    'start vending business Glen Burnie, Maryland',
    'Glen Burnie vending permits',
    'vending machine locations Glen Burnie',
    'Glen Burnie vending course',
    'vending business guide Maryland'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/glen-burnie-maryland'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Glen Burnie, Maryland',
    description: 'Step-by-step guide with licensing, locations, and vending course for Glen Burnie, Maryland',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/glen-burnie-maryland',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Glen Burnie, Maryland'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Glen Burnie, Maryland',
    description: 'Complete guide with licensing, locations, and vending course for Glen Burnie, Maryland'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <GlenBurnieMarylandHowToStartPage />
}
