import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Services in Olympia, WA - Free Installation & Service',
  description: 'Bring reliable vending machines to Olympia, Washington workplaces with turnkey installation, curated products, and full maintenance from vetted Puget Sound operators.',
  keywords: 'vending services Olympia, vending machines Olympia WA, Olympia vending operators, break room vending Olympia Washington',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-services/olympia-washington'
  },
  openGraph: {
    title: 'Vending Machine Services in Olympia, WA - Free Installation & Service',
    description: 'Connect with trusted Olympia vending providers who handle installation, stocking, and maintenance for government, healthcare, and business campuses.',
    url: 'https://www.thevendinglocator.com/vending-services/olympia-washington',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machine Services in Olympia, WA - Free Installation & Service',
    description: 'Fuel state agencies, Saint Martin’s University, and Port of Olympia tenants with professional vending and micro market programs at no upfront cost.'
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

export default function OlympiaWashingtonServicesPage() {
  return <PageClient />
}


