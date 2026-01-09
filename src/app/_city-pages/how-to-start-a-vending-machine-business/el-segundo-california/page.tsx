import ElSegundoCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in El Segundo, California (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in El Segundo, California. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business El Segundo',
    'start vending business El Segundo, California',
    'El Segundo vending permits',
    'vending machine locations El Segundo',
    'El Segundo vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/el-segundo-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in El Segundo, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for El Segundo, California',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/el-segundo-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in El Segundo, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in El Segundo, California',
    description: 'Complete guide with licensing, locations, and vending course for El Segundo, California'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <ElSegundoCaliforniaHowToStartPage />
}
