import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'How It Works - The Vending Locator',
  description: 'See exactly how our vending location leads service works from purchase to delivery, including research, verification, and lead handoff.',
  keywords: 'how it works vending leads, vending location process, vending lead research, vending locator process',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-it-works',
  },
  openGraph: {
    title: 'How It Works - The Vending Locator',
    description: 'Our step-by-step process for delivering verified vending machine location leads.',
    url: 'https://www.thevendinglocator.com/how-it-works',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How It Works - The Vending Locator',
    description: 'Our step-by-step process for delivering verified vending machine location leads.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function Page() {
  return <PageClient />
}


