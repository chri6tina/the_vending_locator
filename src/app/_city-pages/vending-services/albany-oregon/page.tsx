import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Services in Albany, OR - Free Installation & Maintenance',
  description: 'Bring full-service vending to your Albany, Oregon business. Local operators provide free installation, tailored product menus, and on-call maintenance throughout Linn County.',
  keywords: 'vending services Albany, vending machines Albany OR, Albany vending operators, break room vending Albany Oregon',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-services/albany-oregon'
  },
  openGraph: {
    title: 'Vending Machine Services in Albany, OR - Free Installation & Maintenance',
    description: 'Get professional vending machine services for your Albany, Oregon facility with free setup, stocking, and service from vetted local operators.',
    url: 'https://www.thevendinglocator.com/vending-services/albany-oregon',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machine Services in Albany, OR - Free Installation & Maintenance',
    description: 'Connect with trusted Albany, Oregon vending operators for turnkey installation, stocking, and upkeep.'
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

export default function AlbanyOregonServicesPage() {
  return <PageClient />
}


