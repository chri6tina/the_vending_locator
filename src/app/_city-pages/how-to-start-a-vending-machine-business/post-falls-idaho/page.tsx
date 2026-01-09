import PostFallsIdahoHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Post Falls, Idaho (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Post Falls, Idaho. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Post Falls',
    'start vending business Post Falls, Idaho',
    'Post Falls vending permits',
    'vending machine locations Post Falls',
    'Post Falls vending course',
    'vending business guide Idaho'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/post-falls-idaho'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Post Falls, Idaho',
    description: 'Step-by-step guide with licensing, locations, and vending course for Post Falls, Idaho',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/post-falls-idaho',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Post Falls, Idaho'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Post Falls, Idaho',
    description: 'Complete guide with licensing, locations, and vending course for Post Falls, Idaho'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <PostFallsIdahoHowToStartPage />
}
