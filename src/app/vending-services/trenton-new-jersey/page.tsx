import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Services in Trenton, NJ - Free Installation & Service',
  description: 'Give Trenton, New Jersey workplaces modern vending machines with turnkey installation, curated product assortments, and reliable maintenance from vetted Central Jersey operators.',
  keywords: 'vending services Trenton, vending machines Trenton NJ, Trenton vending operators, break room vending Trenton New Jersey',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-services/trenton-new-jersey'
  },
  openGraph: {
    title: 'Vending Machine Services in Trenton, NJ - Free Installation & Service',
    description: 'Connect with trusted Trenton vending partners who handle installation, stocking, and maintenance for state agencies, hospitals, and corporate campuses.',
    url: 'https://www.thevendinglocator.com/vending-services/trenton-new-jersey',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machine Services in Trenton, NJ - Free Installation & Service',
    description: 'Serve the State Capitol Complex, Capital Health, and Princeton corridor offices with dependable vending programs at no upfront cost.'
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

export default function TrentonNewJerseyServicesPage() {
  return <PageClient />
}


