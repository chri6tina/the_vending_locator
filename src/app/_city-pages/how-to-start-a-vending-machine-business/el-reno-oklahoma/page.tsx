import ElRenoOklahomaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in El Reno, Oklahoma (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in El Reno, Oklahoma. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business El Reno',
    'start vending business El Reno, Oklahoma',
    'El Reno vending permits',
    'vending machine locations El Reno',
    'El Reno vending course',
    'vending business guide Oklahoma'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/el-reno-oklahoma'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in El Reno, Oklahoma',
    description: 'Step-by-step guide with licensing, locations, and vending course for El Reno, Oklahoma',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/el-reno-oklahoma',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in El Reno, Oklahoma'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in El Reno, Oklahoma',
    description: 'Complete guide with licensing, locations, and vending course for El Reno, Oklahoma'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <ElRenoOklahomaHowToStartPage />
}
