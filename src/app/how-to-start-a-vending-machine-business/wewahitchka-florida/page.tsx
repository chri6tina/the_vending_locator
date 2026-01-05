import WewahitchkaFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Wewahitchka, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Wewahitchka, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Wewahitchka',
    'start vending business Wewahitchka, Florida',
    'Wewahitchka vending permits',
    'vending machine locations Wewahitchka',
    'Wewahitchka vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/wewahitchka-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Wewahitchka, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Wewahitchka, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/wewahitchka-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Wewahitchka, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Wewahitchka, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Wewahitchka, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <WewahitchkaFloridaHowToStartPage />
}
