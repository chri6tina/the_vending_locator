import WenatcheeWashingtonHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Wenatchee, Washington (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Wenatchee, Washington. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Wenatchee',
    'start vending business Wenatchee, Washington',
    'Wenatchee vending permits',
    'vending machine locations Wenatchee',
    'Wenatchee vending course',
    'vending business guide Washington'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/wenatchee-washington'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Wenatchee, Washington',
    description: 'Step-by-step guide with licensing, locations, and vending course for Wenatchee, Washington',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/wenatchee-washington',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Wenatchee, Washington'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Wenatchee, Washington',
    description: 'Complete guide with licensing, locations, and vending course for Wenatchee, Washington'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <WenatcheeWashingtonHowToStartPage />
}
