import { Metadata } from 'next'
import ChampaignUrbanaPage from './pageClient'

const canonicalUrl = 'https://www.thevendinglocator.com/vending-machines-for-sale-in-champaign-urbana-illinois'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Champaign–Urbana, Illinois | AI Smart Coolers for UIUC & Research Park',
  description:
    'Deploy Haha AI smart coolers across Champaign–Urbana, Illinois. Serve UIUC, Research Park startups, and Carle Health with premium vending and 24/7 support.',
  keywords:
    'Champaign Urbana vending machines for sale, smart vending Champaign IL, haha smart coolers Urbana, AI vending Illinois, UIUC vending machines',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title: 'Vending Machines for Sale in Champaign–Urbana, Illinois | AI Smart Coolers for UIUC & Research Park',
    description:
      'Bring AI-powered Haha smart coolers to UIUC, Research Park, and Champaign–Urbana healthcare campuses with expert placement guidance.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Champaign–Urbana, Illinois | AI Smart Coolers for UIUC & Research Park',
    description:
      'Modernise Champaign–Urbana vending with Haha AI coolers, Amazon availability, and 24/7 Telegram support from The Vending Locator.'
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

export default function ChampaignUrbanaIllinoisVendingPage() {
  return <ChampaignUrbanaPage />
}
