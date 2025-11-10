import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Services in Conway, SC - Free Installation & Service',
  description: 'Serve your Conway, South Carolina workplace with reliable vending machines, free installation, and full maintenance from trusted local operators servicing Horry County.',
  keywords: 'vending services Conway, vending machines Conway SC, Conway vending operators, break room vending Conway South Carolina',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-services/conway-south-carolina'
  },
  openGraph: {
    title: 'Vending Machine Services in Conway, SC - Free Installation & Service',
    description: 'Connect with vetted Conway, South Carolina vending operators for custom product menus, cashless payments, and dependable maintenance.',
    url: 'https://www.thevendinglocator.com/vending-services/conway-south-carolina',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machine Services in Conway, SC - Free Installation & Service',
    description: 'Bring full-service vending to Conway offices, schools, plants, and hospitality venues with no upfront cost.'
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

export default function ConwaySouthCarolinaServicesPage() {
  return <PageClient />
}


