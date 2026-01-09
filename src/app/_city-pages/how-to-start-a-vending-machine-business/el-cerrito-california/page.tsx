import ElCerritoCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in El Cerrito, California (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in El Cerrito, California. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business El Cerrito',
    'start vending business El Cerrito, California',
    'El Cerrito vending permits',
    'vending machine locations El Cerrito',
    'El Cerrito vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/el-cerrito-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in El Cerrito, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for El Cerrito, California',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/el-cerrito-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in El Cerrito, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in El Cerrito, California',
    description: 'Complete guide with licensing, locations, and vending course for El Cerrito, California'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <ElCerritoCaliforniaHowToStartPage />
}
