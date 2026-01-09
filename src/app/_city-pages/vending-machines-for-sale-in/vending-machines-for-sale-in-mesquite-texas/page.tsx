import { Metadata } from 'next'
import MesquitePage from './pageClient'

const canonicalUrl =
  'https://www.thevendinglocator.com/vending-machines-for-sale-in-mesquite-texas'

export const metadata: Metadata = {
  title:
    'Vending Machines for Sale in Mesquite, Texas | Smart Coolers for Rodeo Arenas & East Dallas Healthcare',
  description:
    'Install Haha AI smart vending machines across Mesquite, Texas. Serve Mesquite Arena, Town East Mall, Baylor Scott & White, and industrial corridors with nonstop supported smart coolers.',
  keywords:
    'Mesquite vending machines for sale, smart vending Mesquite TX, haha smart coolers Dallas County, Mesquite Arena vending, Town East Mall vending machines',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title:
      'Vending Machines for Sale in Mesquite, Texas | Smart Coolers for Rodeo Arenas & East Dallas Healthcare',
    description:
      'Deliver AI-powered Haha smart coolers to Mesquite’s entertainment venues, retail centers, healthcare campuses, and industrial hubs with 24/7 support.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Vending Machines for Sale in Mesquite, Texas | Smart Coolers for Rodeo Arenas & East Dallas Healthcare',
    description:
      'Modernise Mesquite vending with Haha AI smart coolers, Amazon availability, and Telegram support around the clock.',
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

export default function MesquiteTexasVendingPage() {
  return <MesquitePage />
}

