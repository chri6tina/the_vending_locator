import AlamogordoNewMexicoHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Alamogordo, New Mexico (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Alamogordo, New Mexico. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Alamogordo',
    'start vending business Alamogordo, New Mexico',
    'Alamogordo vending permits',
    'vending machine locations Alamogordo',
    'Alamogordo vending course',
    'vending business guide New Mexico'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/alamogordo-new-mexico'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Alamogordo, New Mexico',
    description: 'Step-by-step guide with licensing, locations, and vending course for Alamogordo, New Mexico',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/alamogordo-new-mexico',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Alamogordo, New Mexico'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Alamogordo, New Mexico',
    description: 'Complete guide with licensing, locations, and vending course for Alamogordo, New Mexico'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <AlamogordoNewMexicoHowToStartPage />
}
