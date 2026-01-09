import { Metadata } from 'next'
import LaredoPage from './pageClient'

const canonicalUrl =
  'https://www.thevendinglocator.com/vending-machines-for-sale-in-laredo-texas'

export const metadata: Metadata = {
  title:
    'Vending Machines for Sale in Laredo, Texas | Smart Coolers for Port Logistics & Border Campuses',
  description:
    'Deploy Haha AI smart vending machines across Laredo, Texas. Serve World Trade Bridge logistics, customs brokers, Laredo College, Texas A&M International University, and healthcare campuses with bilingual support.',
  keywords:
    'Laredo vending machines for sale, smart vending Laredo TX, haha smart coolers Laredo, border logistics vending, Texas A&M International vending machines',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title:
      'Vending Machines for Sale in Laredo, Texas | Smart Coolers for Port Logistics & Border Campuses',
    description:
      'Bring AI-powered Haha smart coolers to Laredo’s logistics hubs, universities, and medical districts with 24/7 bilingual support.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Vending Machines for Sale in Laredo, Texas | Smart Coolers for Port Logistics & Border Campuses',
    description:
      'Modernise Laredo vending with Haha AI smart coolers, Amazon availability, and bilingual Telegram support.',
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

export default function LaredoTexasVendingPage() {
  return <LaredoPage />
}

