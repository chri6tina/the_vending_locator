import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Leads in Murfreesboro, Tennessee | The Vending Locator',
  description: 'Find high-quality vending machine leads in Murfreesboro, Tennessee. Connect with businesses looking for vending services in Murfreesboro and surrounding areas.',
  keywords: 'vending machine leads, Murfreesboro Tennessee, vending opportunities, business leads, vending machine locations',
  canonical: 'https://www.thevendinglocator.com/vending-leads/murfreesboro-tennessee',
  openGraph: {
    title: 'Vending Machine Leads in Murfreesboro, Tennessee | The Vending Locator',
    description: 'Find high-quality vending machine leads in Murfreesboro, Tennessee. Connect with businesses looking for vending services in Murfreesboro and surrounding areas.',
    url: 'https://www.thevendinglocator.com/vending-leads/murfreesboro-tennessee',
    siteName: 'The Vending Locator',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machine Leads in Murfreesboro, Tennessee | The Vending Locator',
    description: 'Find high-quality vending machine leads in Murfreesboro, Tennessee. Connect with businesses looking for vending services in Murfreesboro and surrounding areas.',
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


// Generate on-demand to reduce build memory usage
// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export default function MurfreesboroTennesseePage() {
  return <PageClient />
}
