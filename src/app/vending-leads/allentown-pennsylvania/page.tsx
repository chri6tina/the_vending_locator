import { Metadata } from 'next'
import AllentownPennsylvaniaVendingLeadsPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Locations in Allentown, Pennsylvania | The Vending Locator',
  description: 'Get pre-qualified vending machine locations in Allentown, Pennsylvania. Access verified businesses with detailed contact information and placement opportunities.',
  keywords: 'vending machine locations Allentown Pennsylvania, vending leads Allentown PA, vending machine business Allentown, vending opportunities Allentown Pennsylvania',
  canonical: 'https://www.thevendinglocator.com/vending-leads/allentown-pennsylvania',
  openGraph: {
    title: 'Vending Machine Locations in Allentown, Pennsylvania | The Vending Locator',
    description: 'Get pre-qualified vending machine locations in Allentown, Pennsylvania. Access verified businesses with detailed contact information and placement opportunities.',
    url: 'https://www.thevendinglocator.com/vending-leads/allentown-pennsylvania',
    siteName: 'The Vending Locator',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vending Machine Locations in Allentown, Pennsylvania',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machine Locations in Allentown, Pennsylvania | The Vending Locator',
    description: 'Get pre-qualified vending machine locations in Allentown, Pennsylvania. Access verified businesses with detailed contact information and placement opportunities.',
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
  return <AllentownPennsylvaniaVendingLeadsPage />
}
