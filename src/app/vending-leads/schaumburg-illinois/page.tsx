import type { Metadata } from 'next'
import SchaumburgIllinoisVendingLeadsPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Leads in Schaumburg, Illinois | The Vending Locator',
  description: 'Find qualified vending machine leads and locations in Schaumburg, Illinois. Access verified businesses, restaurants, and commercial spaces for vending machine placement opportunities.',
  keywords: 'vending machine leads, Schaumburg Illinois, vending locations, business leads, commercial vending, Illinois vending opportunities',
  canonical: 'https://www.thevendinglocator.com/vending-leads/schaumburg-illinois',
  openGraph: {
    title: 'Vending Machine Leads in Schaumburg, Illinois | The Vending Locator',
    description: 'Find qualified vending machine leads and locations in Schaumburg, Illinois. Access verified businesses, restaurants, and commercial spaces for vending machine placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/schaumburg-illinois',
    siteName: 'The Vending Locator',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vending Machine Leads in Schaumburg, Illinois',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machine Leads in Schaumburg, Illinois | The Vending Locator',
    description: 'Find qualified vending machine leads and locations in Schaumburg, Illinois. Access verified businesses, restaurants, and commercial spaces for vending machine placement opportunities.',
    images: ['https://www.thevendinglocator.com/og-image.jpg'],
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
export default function Page() {
  return <SchaumburgIllinoisVendingLeadsPage />
}
