import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Services in Hagerstown, MD - Free Installation & Service',
  description: 'Equip your Hagerstown, Maryland workplace with modern vending machines, cashless payments, and full-service maintenance from vetted operators covering Washington County.',
  keywords: 'vending services Hagerstown, vending machines Hagerstown MD, Hagerstown vending operators, break room vending Hagerstown Maryland',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-services/hagerstown-maryland'
  },
  openGraph: {
    title: 'Vending Machine Services in Hagerstown, MD - Free Installation & Service',
    description: 'Connect with trusted Hagerstown vending operators for turnkey installation, stocking, and upkeep tailored to your teams.',
    url: 'https://www.thevendinglocator.com/vending-services/hagerstown-maryland',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machine Services in Hagerstown, MD - Free Installation & Service',
    description: 'Serve Hagerstown warehouses, hospitals, schools, and offices with professional vending solutions at no upfront cost.'
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

export default function HagerstownMarylandServicesPage() {
  return <PageClient />
}


