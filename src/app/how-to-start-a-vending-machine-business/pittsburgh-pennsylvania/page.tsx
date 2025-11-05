import PittsburghPennsylvaniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Pittsburgh, Pennsylvania (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Pittsburgh, Pennsylvania. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Pittsburgh',
    'start vending business Pittsburgh Pennsylvania',
    'Pittsburgh vending permits',
    'vending machine locations Pittsburgh',
    'Pittsburgh vending course',
    'vending business guide Pennsylvania'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/pittsburgh-pennsylvania'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Pittsburgh, Pennsylvania',
    description: 'Step-by-step guide with licensing, locations, and vending course for Pittsburgh, Pennsylvania',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/pittsburgh-pennsylvania',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Pittsburgh, Pennsylvania'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Pittsburgh, Pennsylvania',
    description: 'Complete guide with licensing, locations, and vending course for Pittsburgh, Pennsylvania'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <PittsburghPennsylvaniaHowToStartPage />
}
