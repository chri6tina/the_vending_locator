import { Metadata } from 'next'
import DentonPage from './pageClient'

const canonicalUrl = 'https://www.thevendinglocator.com/vending-machines-for-sale-in-denton-texas'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Denton, Texas | AI Smart Coolers for UNT & Logistics Hubs',
  description:
    'Deploy Haha AI smart coolers across Denton, Texas. Serve UNT, TWU, hospitals, logistics hubs, and luxury residential with premium vending and 24/7 support.',
  keywords:
    'Denton vending machines for sale, smart vending Denton TX, haha smart coolers Denton, AI vending North Texas, UNT vending machines',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title: 'Vending Machines for Sale in Denton, Texas | AI Smart Coolers for UNT & Logistics Hubs',
    description:
      'Bring AI-powered Haha smart coolers to Denton campuses, warehouses, and healthcare facilities with expert placement guidance.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Denton, Texas | AI Smart Coolers for UNT & Logistics Hubs',
    description:
      'Modernise Denton vending with Haha AI coolers, Amazon availability, and 24/7 Telegram support from The Vending Locator.'
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

export default function DentonTexasVendingPage() {
  return <DentonPage />
}
