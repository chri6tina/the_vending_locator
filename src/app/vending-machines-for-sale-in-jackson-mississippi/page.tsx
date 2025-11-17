import { Metadata } from 'next'
import JacksonPage from './pageClient'

const canonicalUrl =
  'https://www.thevendinglocator.com/vending-machines-for-sale-in-jackson-mississippi'

export const metadata: Metadata = {
  title:
    'Vending Machines for Sale in Jackson, Mississippi | AI Smart Coolers for State Government & Medical District',
  description:
    'Deploy Haha AI smart vending machines across Jackson, Mississippi. Serve the Mississippi State Capitol, University of Mississippi Medical Center, Jackson State University, and metro corporate campuses with 24/7 support.',
  keywords:
    'Jackson vending machines for sale, smart vending Jackson MS, haha smart coolers Mississippi, state government vending Jackson, UMMC vending machines',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title:
      'Vending Machines for Sale in Jackson, Mississippi | AI Smart Coolers for State Government & Medical District',
    description:
      'Provide AI-powered Haha smart coolers to government complexes, hospitals, and universities across Jackson, MS.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Vending Machines for Sale in Jackson, Mississippi | AI Smart Coolers for State Government & Medical District',
    description:
      'Modernise Jackson vending with Haha AI smart coolers, Amazon availability, and 24/7 Telegram support.',
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

export default function JacksonMississippiVendingPage() {
  return <JacksonPage />
}

