import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Services in Manhattan, KS - Free Installation & Service',
  description: 'Bring turnkey vending machines to Manhattan, Kansas workplaces with curated product assortments, telemetry technology, and dependable maintenance from vetted Flint Hills operators.',
  keywords: 'vending services Manhattan KS, vending machines Manhattan Kansas, Manhattan vending operators, break room vending Manhattan Kansas',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-services/manhattan-kansas'
  },
  openGraph: {
    title: 'Vending Machine Services in Manhattan, KS - Free Installation & Service',
    description: 'Connect with trusted Manhattan vending providers who handle installation, stocking, and service for Fort Riley, K-State, and local employers.',
    url: 'https://www.thevendinglocator.com/vending-services/manhattan-kansas',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machine Services in Manhattan, KS - Free Installation & Service',
    description: 'Serve Fort Riley, Kansas State University, and Aggieville businesses with professional vending and micro market programs at no upfront cost.'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

export const revalidate = 3600

export default function ManhattanKansasServicesPage() {
  return <PageClient />
}


