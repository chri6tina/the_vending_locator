import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Services in Ithaca, NY - Free Installation & Service',
  description: 'Equip Ithaca, New York workplaces with turnkey vending machines, curated products, and dependable maintenance from Finger Lakes operators who cover campuses, healthcare, and tourism.',
  keywords: 'vending services Ithaca, vending machines Ithaca NY, Ithaca vending operators, break room vending Ithaca New York',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-services/ithaca-new-york'
  },
  openGraph: {
    title: 'Vending Machine Services in Ithaca, NY - Free Installation & Service',
    description: 'Connect with vetted Ithaca vending partners who handle installation, stocking, and ongoing service for campuses, hospitality, and research facilities.',
    url: 'https://www.thevendinglocator.com/vending-services/ithaca-new-york',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machine Services in Ithaca, NY - Free Installation & Service',
    description: 'Serve Cornell, Ithaca College, and Cayuga Medical Center with professional vending and micro market programs at no upfront cost.'
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

export default function IthacaNewYorkServicesPage() {
  return <PageClient />
}


