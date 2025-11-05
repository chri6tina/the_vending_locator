import type { Metadata } from 'next'
import JolietIllinoisVendingLeadsPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Leads in Joliet, Illinois | The Vending Locator',
  description: 'Find qualified vending machine leads and locations in Joliet, Illinois. Access verified businesses, restaurants, and commercial spaces for vending machine placement opportunities.',
  keywords: 'vending machine leads, Joliet Illinois, vending locations, business leads, commercial vending, Illinois vending opportunities',
  canonical: 'https://www.thevendinglocator.com/vending-leads/joliet-illinois',
  openGraph: {
    title: 'Vending Machine Leads in Joliet, Illinois | The Vending Locator',
    description: 'Find qualified vending machine leads and locations in Joliet, Illinois. Access verified businesses, restaurants, and commercial spaces for vending machine placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/joliet-illinois',
    siteName: 'The Vending Locator',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vending Machine Leads in Joliet, Illinois',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machine Leads in Joliet, Illinois | The Vending Locator',
    description: 'Find qualified vending machine leads and locations in Joliet, Illinois. Access verified businesses, restaurants, and commercial spaces for vending machine placement opportunities.',
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
export const revalidate = 3600;

export default function Page() {
  return <JolietIllinoisVendingLeadsPage />
}
