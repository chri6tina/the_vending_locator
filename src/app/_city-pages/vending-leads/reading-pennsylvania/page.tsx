import { Metadata } from 'next'
import ReadingPennsylvaniaVendingLeadsPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Reading, Pennsylvania | The Vending Locator',
  description: 'Get pre-qualified vending machine locations in Reading, Pennsylvania. Access verified businesses with detailed contact information and placement opportunities.',
  keywords: 'vending machine locations Reading Pennsylvania, vending leads Reading PA, vending machine business Reading, vending opportunities Reading Pennsylvania',
  canonical: 'https://www.thevendinglocator.com/vending-leads/reading-pennsylvania',
  openGraph: {
    title: 'Vending Machine Locations in Reading, Pennsylvania | The Vending Locator',
    description: 'Get pre-qualified vending machine locations in Reading, Pennsylvania. Access verified businesses with detailed contact information and placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/reading-pennsylvania',
    siteName: 'The Vending Locator',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vending Machine Locations in Reading, Pennsylvania',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machine Locations in Reading, Pennsylvania | The Vending Locator',
    description: 'Get pre-qualified vending machine locations in Reading, Pennsylvania. Access verified businesses with detailed contact information and placement opportunities.',
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
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export default function Page() {
  return <ReadingPennsylvaniaVendingLeadsPage />
}
