import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Leads in Johnson City, Tennessee | The Vending Locator',
  description: 'Find high-quality vending machine leads in Johnson City, Tennessee. Connect with businesses looking for vending services in Johnson City and surrounding areas.',
  keywords: 'vending machine leads, Johnson City Tennessee, vending opportunities, business leads, vending machine locations',
  canonical: 'https://www.thevendinglocator.com/vending-leads/johnson-city-tennessee',
  openGraph: {
    title: 'Vending Machine Leads in Johnson City, Tennessee | The Vending Locator',
    description: 'Find high-quality vending machine leads in Johnson City, Tennessee. Connect with businesses looking for vending services in Johnson City and surrounding areas.',
    url: 'https://www.thevendinglocator.com/vending-leads/johnson-city-tennessee',
    siteName: 'The Vending Locator',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machine Leads in Johnson City, Tennessee | The Vending Locator',
    description: 'Find high-quality vending machine leads in Johnson City, Tennessee. Connect with businesses looking for vending services in Johnson City and surrounding areas.',
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

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function JohnsonCityTennesseePage() {
  return <PageClient />
}
