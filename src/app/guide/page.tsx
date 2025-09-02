import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Guide for Entrepreneurs ($79) - The Vending Locator',
  description: 'Get contracts, scripts, outreach templates, and step-by-step guidance to launch and scale your vending machine business. Includes state-by-state directory.',
  alternates: { canonical: 'https://www.thevendinglocator.com/guide' },
  openGraph: {
    title: 'Vending Machine Guide for Entrepreneurs ($79) - The Vending Locator',
    description: 'Access proven contracts, scripts, and templates to win locations. Includes a US directory of markets we serve.',
    url: 'https://www.thevendinglocator.com/guide',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machine Guide for Entrepreneurs ($79) - The Vending Locator',
    description: 'Proven contracts, scripts, outreach templates, and more to accelerate your vending business.'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 }
  }
}

export default function GuidePage() {
  return <PageClient />
}


