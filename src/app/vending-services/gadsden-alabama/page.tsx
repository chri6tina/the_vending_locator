import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Services in Gadsden, AL - Free Installation & Service',
  description: 'Bring reliable vending machines to Gadsden, Alabama workplaces with turnkey installation, curated product assortments, and ongoing maintenance from vetted Etowah County operators.',
  keywords: 'vending services Gadsden, vending machines Gadsden AL, Gadsden vending operators, break room vending Gadsden Alabama',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-services/gadsden-alabama'
  },
  openGraph: {
    title: 'Vending Machine Services in Gadsden, AL - Free Installation & Service',
    description: 'Connect with trusted Gadsden vending providers who handle installation, stocking, and maintenance for manufacturers, healthcare, and education campuses.',
    url: 'https://www.thevendinglocator.com/vending-services/gadsden-alabama',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machine Services in Gadsden, AL - Free Installation & Service',
    description: 'Serve Goodyear, Gadsden Regional Medical Center, and Gadsden State Community College with professional vending programs at no upfront cost.'
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

export default function GadsdenAlabamaServicesPage() {
  return <PageClient />
}


