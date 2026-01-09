import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Services in Danbury, CT - Free Installation & Maintenance',
  description: 'Outfit your Danbury, Connecticut workplace with modern vending machines, cashless payments, and full-service maintenance from trusted Fairfield County operators.',
  keywords: 'vending services Danbury, vending machines Danbury CT, Danbury vending operators, break room vending Danbury Connecticut',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-services/danbury-connecticut'
  },
  openGraph: {
    title: 'Vending Machine Services in Danbury, CT - Free Installation & Maintenance',
    description: 'Connect with vetted Danbury vending operators for turnkey installation, stocking, and upkeep tailored to Hat City employers.',
    url: 'https://www.thevendinglocator.com/vending-services/danbury-connecticut',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machine Services in Danbury, CT - Free Installation & Maintenance',
    description: 'Bring full-service vending to Danbury offices, manufacturers, hospitals, and campuses—no upfront cost required.'
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

export default function DanburyConnecticutServicesPage() {
  return <PageClient />
}


