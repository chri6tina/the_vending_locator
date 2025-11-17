import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Leads in Carmel, Indiana | The Vending Locator',
  description: 'Find high-quality vending machine leads in Carmel, Indiana. Connect with businesses looking for vending services in Carmel and surrounding areas.',
  keywords: 'vending machine leads, Carmel Indiana, vending opportunities, business leads, vending machine locations',
  canonical: 'https://www.thevendinglocator.com/vending-leads/carmel-indiana',
  openGraph: {
    title: 'Vending Machine Leads in Carmel, Indiana | The Vending Locator',
    description: 'Find high-quality vending machine leads in Carmel, Indiana. Connect with businesses looking for vending services in Carmel and surrounding areas.',
    url: 'https://www.thevendinglocator.com/vending-leads/carmel-indiana',
    siteName: 'The Vending Locator',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machine Leads in Carmel, Indiana | The Vending Locator',
    description: 'Find high-quality vending machine leads in Carmel, Indiana. Connect with businesses looking for vending services in Carmel and surrounding areas.',
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
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function CarmelIndianaPage() {
  return <PageClient />
}
