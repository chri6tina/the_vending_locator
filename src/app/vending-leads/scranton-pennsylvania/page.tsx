import { Metadata } from 'next'
import ScrantonPennsylvaniaVendingLeadsPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Scranton, Pennsylvania | The Vending Locator',
  description: 'Get pre-qualified vending machine locations in Scranton, Pennsylvania. Access verified businesses with detailed contact information and placement opportunities.',
  keywords: 'vending machine locations Scranton Pennsylvania, vending leads Scranton PA, vending machine business Scranton, vending opportunities Scranton Pennsylvania',
  canonical: 'https://www.thevendinglocator.com/vending-leads/scranton-pennsylvania',
  openGraph: {
    title: 'Vending Machine Locations in Scranton, Pennsylvania | The Vending Locator',
    description: 'Get pre-qualified vending machine locations in Scranton, Pennsylvania. Access verified businesses with detailed contact information and placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/scranton-pennsylvania',
    siteName: 'The Vending Locator',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vending Machine Locations in Scranton, Pennsylvania',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machine Locations in Scranton, Pennsylvania | The Vending Locator',
    description: 'Get pre-qualified vending machine locations in Scranton, Pennsylvania. Access verified businesses with detailed contact information and placement opportunities.',
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
  return <ScrantonPennsylvaniaVendingLeadsPage />
}
