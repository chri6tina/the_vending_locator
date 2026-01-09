import { Metadata } from 'next'
import LincolnPage from './pageClient'

const canonicalUrl =
  'https://www.thevendinglocator.com/vending-machines-for-sale-in-lincoln-nebraska'

export const metadata: Metadata = {
  title:
    'Vending Machines for Sale in Lincoln, Nebraska | Smart Coolers for State Government & UNL',
  description:
    'Deploy Haha AI smart vending machines across Lincoln, Nebraska. Serve the Nebraska State Capitol, University of Nebraska–Lincoln, Bryan Health, and Haymarket tech campuses with 24/7 support.',
  keywords:
    'Lincoln vending machines for sale, smart vending Lincoln NE, haha smart coolers Nebraska, UNL vending machines, Nebraska State Capitol vending',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title:
      'Vending Machines for Sale in Lincoln, Nebraska | Smart Coolers for State Government & UNL',
    description:
      'Bring AI-powered Haha smart coolers to Lincoln government offices, UNL campuses, healthcare systems, and innovation hubs.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Vending Machines for Sale in Lincoln, Nebraska | Smart Coolers for State Government & UNL',
    description:
      'Modernise Lincoln vending with Haha AI smart coolers, Amazon availability, and 24/7 Telegram support.',
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

export default function LincolnNebraskaVendingPage() {
  return <LincolnPage />
}

