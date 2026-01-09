import { Metadata } from 'next'
import NapervillePage from './pageClient'

const canonicalUrl =
  'https://www.thevendinglocator.com/vending-machines-for-sale-in-naperville-illinois'

export const metadata: Metadata = {
  title:
    'Vending Machines for Sale in Naperville, Illinois | Smart Coolers for Edward Hospital & Innovation Corridor',
  description:
    'Install Haha AI smart vending machines across Naperville, Illinois. Serve Edward Hospital, downtown tech firms, Route 59 corporate corridors, and Naperville 203/204 campuses with nonstop support.',
  keywords:
    'Naperville vending machines for sale, smart vending Naperville IL, haha smart coolers DuPage County, Edward Hospital vending, Naperville corporate campus vending',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title:
      'Vending Machines for Sale in Naperville, Illinois | Smart Coolers for Edward Hospital & Innovation Corridor',
    description:
      'Deliver AI-powered Haha smart coolers to Naperville healthcare systems, corporate campuses, and schools with 24/7 support.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Vending Machines for Sale in Naperville, Illinois | Smart Coolers for Edward Hospital & Innovation Corridor',
    description:
      'Modernise Naperville vending with Haha AI smart coolers, Amazon availability, and Telegram support across Chicago’s western suburbs.',
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

export default function NapervilleIllinoisVendingPage() {
  return <NapervillePage />
}

