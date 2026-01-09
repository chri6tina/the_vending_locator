import { Metadata } from 'next'
import NorthLasVegasPage from './pageClient'

const canonicalUrl =
  'https://www.thevendinglocator.com/vending-machines-for-sale-in-north-las-vegas-nevada'

export const metadata: Metadata = {
  title:
    'Vending Machines for Sale in North Las Vegas, Nevada | Smart Coolers for Nellis AFB & Apex Industrial Park',
  description:
    'Deploy Haha AI smart vending machines across North Las Vegas, Nevada. Serve Nellis Air Force Base, Apex Industrial Park, North Vista Hospital, and master-planned communities with desert-ready support.',
  keywords:
    'North Las Vegas vending machines for sale, smart vending North Las Vegas NV, haha smart coolers Las Vegas Valley, Nellis AFB vending, Apex Industrial Park vending machines',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title:
      'Vending Machines for Sale in North Las Vegas, Nevada | Smart Coolers for Nellis AFB & Apex Industrial Park',
    description:
      'Bring AI-powered Haha smart coolers to North Las Vegas defense, logistics, healthcare, and residential deployments with 24/7 support.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Vending Machines for Sale in North Las Vegas, Nevada | Smart Coolers for Nellis AFB & Apex Industrial Park',
    description:
      'Modernise North Las Vegas vending with Haha AI smart coolers, Amazon availability, and desert telemetry coaching around the clock.',
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

export default function NorthLasVegasNevadaVendingPage() {
  return <NorthLasVegasPage />
}

