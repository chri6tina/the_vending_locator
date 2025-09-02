import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Leads in Bloomington, Indiana | The Vending Locator',
  description: 'Find high-quality vending machine leads in Bloomington, Indiana. Connect with businesses looking for vending services in Bloomington and surrounding areas.',
  keywords: 'vending machine leads, Bloomington Indiana, vending opportunities, business leads, vending machine locations',
  canonical: 'https://www.thevendinglocator.com/vending-leads/bloomington-indiana',
  openGraph: {
    title: 'Vending Machine Leads in Bloomington, Indiana | The Vending Locator',
    description: 'Find high-quality vending machine leads in Bloomington, Indiana. Connect with businesses looking for vending services in Bloomington and surrounding areas.',
    url: 'https://www.thevendinglocator.com/vending-leads/bloomington-indiana',
    siteName: 'The Vending Locator',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machine Leads in Bloomington, Indiana | The Vending Locator',
    description: 'Find high-quality vending machine leads in Bloomington, Indiana. Connect with businesses looking for vending services in Bloomington and surrounding areas.',
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

export default function BloomingtonIndianaPage() {
  return <PageClient />
}
