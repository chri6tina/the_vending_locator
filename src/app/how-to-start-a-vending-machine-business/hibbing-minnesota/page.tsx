import HibbingMinnesotaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Hibbing, Minnesota (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Hibbing, Minnesota. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Hibbing',
    'start vending business Hibbing, Minnesota',
    'Hibbing vending permits',
    'vending machine locations Hibbing',
    'Hibbing vending course',
    'vending business guide Minnesota'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/hibbing-minnesota'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Hibbing, Minnesota',
    description: 'Step-by-step guide with licensing, locations, and vending course for Hibbing, Minnesota',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/hibbing-minnesota',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Hibbing, Minnesota'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Hibbing, Minnesota',
    description: 'Complete guide with licensing, locations, and vending course for Hibbing, Minnesota'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <HibbingMinnesotaHowToStartPage />
}
