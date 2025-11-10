import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Services in Charlottesville, VA - Free Installation & Maintenance',
  description: 'Serve your Charlottesville, Virginia workplace with professional vending machines, curated product menus, and turnkey maintenance from local operators covering Albemarle County.',
  keywords: 'vending services Charlottesville, vending machines Charlottesville VA, Charlottesville vending operators, break room vending Charlottesville Virginia',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-services/charlottesville-virginia'
  },
  openGraph: {
    title: 'Vending Machine Services in Charlottesville, VA - Free Installation & Maintenance',
    description: 'Connect with vetted Charlottesville vending operators who handle installation, stocking, and upkeep across UVA, downtown, and Albemarle County.',
    url: 'https://www.thevendinglocator.com/vending-services/charlottesville-virginia',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machine Services in Charlottesville, VA - Free Installation & Maintenance',
    description: 'Give UVA campuses, biotech labs, and Monticello-area businesses full-service vending with no upfront cost.'
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

export default function CharlottesvilleVirginiaServicesPage() {
  return <PageClient />
}


