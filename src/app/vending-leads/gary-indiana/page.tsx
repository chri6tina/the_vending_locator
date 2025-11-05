import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Leads in Gary, Indiana | The Vending Locator',
  description: 'Find high-quality vending machine leads in Gary, Indiana. Connect with businesses looking for vending services in Gary and surrounding areas.',
  keywords: 'vending machine leads, Gary Indiana, vending opportunities, business leads, vending machine locations',
  canonical: 'https://www.thevendinglocator.com/vending-leads/gary-indiana',
  openGraph: {
    title: 'Vending Machine Leads in Gary, Indiana | The Vending Locator',
    description: 'Find high-quality vending machine leads in Gary, Indiana. Connect with businesses looking for vending services in Gary and surrounding areas.',
    url: 'https://www.thevendinglocator.com/vending-leads/gary-indiana',
    siteName: 'The Vending Locator',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machine Leads in Gary, Indiana | The Vending Locator',
    description: 'Find high-quality vending machine leads in Gary, Indiana. Connect with businesses looking for vending services in Gary and surrounding areas.',
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

export default function GaryIndianaPage() {
  return <PageClient />
}
