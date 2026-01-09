import { Metadata } from 'next'
import MiamiPage from './pageClient'

const canonicalUrl =
  'https://www.thevendinglocator.com/vending-machines-for-sale-in-miami-florida'

export const metadata: Metadata = {
  title:
    'Vending Machines for Sale in Miami, Florida | Smart Coolers for Brickell, PortMiami & MIA',
  description:
    'Deploy Haha AI smart vending machines across Miami, Florida. Serve Brickell towers, PortMiami cruise terminals, Jackson Health, and Miami International Airport with bilingual 24/7 support.',
  keywords:
    'Miami vending machines for sale, smart vending Miami FL, haha smart coolers Miami, Brickell vending, PortMiami vending machines',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title:
      'Vending Machines for Sale in Miami, Florida | Smart Coolers for Brickell, PortMiami & MIA',
    description:
      'Deliver AI-powered Haha smart coolers to Miami’s financial district, cruise terminals, healthcare systems, and airports with nonstop support.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Vending Machines for Sale in Miami, Florida | Smart Coolers for Brickell, PortMiami & MIA',
    description:
      'Modernise Miami vending with Haha AI smart coolers, bilingual merchandising, and 24/7 Telegram support.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

export const revalidate = 3600

export default function MiamiFloridaVendingPage() {
  return <MiamiPage />
}

