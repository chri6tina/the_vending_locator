import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Leads in Franklin, Tennessee | The Vending Locator',
  description: 'Find high-quality vending machine leads in Franklin, Tennessee. Connect with businesses looking for vending services in Franklin and surrounding areas.',
  keywords: 'vending machine leads, Franklin Tennessee, vending opportunities, business leads, vending machine locations',
  canonical: 'https://www.thevendinglocator.com/vending-leads/franklin-tennessee',
  openGraph: {
    title: 'Vending Machine Leads in Franklin, Tennessee | The Vending Locator',
    description: 'Find high-quality vending machine leads in Franklin, Tennessee. Connect with businesses looking for vending services in Franklin and surrounding areas.',
    url: 'https://www.thevendinglocator.com/vending-leads/franklin-tennessee',
    siteName: 'The Vending Locator',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machine Leads in Franklin, Tennessee | The Vending Locator',
    description: 'Find high-quality vending machine leads in Franklin, Tennessee. Connect with businesses looking for vending services in Franklin and surrounding areas.',
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

export default function FranklinTennesseePage() {
  return <PageClient />
}
