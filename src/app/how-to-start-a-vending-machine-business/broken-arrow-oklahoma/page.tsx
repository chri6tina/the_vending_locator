import BrokenArrowOklahomaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Broken Arrow, Oklahoma (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Broken Arrow, Oklahoma. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Broken Arrow',
    'start vending business Broken Arrow Oklahoma',
    'Broken Arrow vending permits',
    'vending machine locations Broken Arrow',
    'Broken Arrow vending course',
    'vending business guide Oklahoma'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/broken-arrow-oklahoma'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Broken Arrow, Oklahoma',
    description: 'Step-by-step guide with licensing, locations, and vending course for Broken Arrow, Oklahoma',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/broken-arrow-oklahoma',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Broken Arrow, Oklahoma'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Broken Arrow, Oklahoma',
    description: 'Complete guide with licensing, locations, and vending course for Broken Arrow, Oklahoma'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <BrokenArrowOklahomaHowToStartPage />
}
