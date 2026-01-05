import PeachtreeCornersGeorgiaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Peachtree Corners, Georgia (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Peachtree Corners, Georgia. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Peachtree Corners',
    'start vending business Peachtree Corners, Georgia',
    'Peachtree Corners vending permits',
    'vending machine locations Peachtree Corners',
    'Peachtree Corners vending course',
    'vending business guide Georgia'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/peachtree-corners-georgia'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Peachtree Corners, Georgia',
    description: 'Step-by-step guide with licensing, locations, and vending course for Peachtree Corners, Georgia',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/peachtree-corners-georgia',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Peachtree Corners, Georgia'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Peachtree Corners, Georgia',
    description: 'Complete guide with licensing, locations, and vending course for Peachtree Corners, Georgia'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <PeachtreeCornersGeorgiaHowToStartPage />
}
