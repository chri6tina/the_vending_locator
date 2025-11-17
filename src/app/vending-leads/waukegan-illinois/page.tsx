import type { Metadata } from 'next'
import WaukeganIllinoisVendingLeadsPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Leads in Waukegan, Illinois | The Vending Locator',
  description: 'Find qualified vending machine leads and locations in Waukegan, Illinois. Access verified businesses, restaurants, and commercial spaces for vending machine placement opportunities.',
  keywords: 'vending machine leads, Waukegan Illinois, vending locations, business leads, commercial vending, Illinois vending opportunities',
  canonical: 'https://www.thevendinglocator.com/vending-leads/waukegan-illinois',
  openGraph: {
    title: 'Vending Machine Leads in Waukegan, Illinois | The Vending Locator',
    description: 'Find qualified vending machine leads and locations in Waukegan, Illinois. Access verified businesses, restaurants, and commercial spaces for vending machine placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/waukegan-illinois',
    siteName: 'The Vending Locator',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vending Machine Leads in Waukegan, Illinois',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machine Leads in Waukegan, Illinois | The Vending Locator',
    description: 'Find qualified vending machine leads and locations in Waukegan, Illinois. Access verified businesses, restaurants, and commercial spaces for vending machine placement opportunities.',
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

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function Page() {
  return <WaukeganIllinoisVendingLeadsPage />
}
