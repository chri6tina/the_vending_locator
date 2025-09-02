import { Metadata } from 'next'
import EriePennsylvaniaVendingLeadsPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Erie, Pennsylvania | The Vending Locator',
  description: 'Get pre-qualified vending machine locations in Erie, Pennsylvania. Access verified businesses with detailed contact information and placement opportunities.',
  keywords: 'vending machine locations Erie Pennsylvania, vending leads Erie PA, vending machine business Erie, vending opportunities Erie Pennsylvania',
  canonical: 'https://www.thevendinglocator.com/vending-leads/erie-pennsylvania',
  openGraph: {
    title: 'Vending Machine Locations in Erie, Pennsylvania | The Vending Locator',
    description: 'Get pre-qualified vending machine locations in Erie, Pennsylvania. Access verified businesses with detailed contact information and placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/erie-pennsylvania',
    siteName: 'The Vending Locator',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vending Machine Locations in Erie, Pennsylvania',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machine Locations in Erie, Pennsylvania | The Vending Locator',
    description: 'Get pre-qualified vending machine locations in Erie, Pennsylvania. Access verified businesses with detailed contact information and placement opportunities.',
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

export default function Page() {
  return <EriePennsylvaniaVendingLeadsPage />
}
