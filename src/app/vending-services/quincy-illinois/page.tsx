import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Services in Quincy, IL - Free Installation & Service',
  description: 'Deliver turnkey vending machines to Quincy, Illinois workplaces with free installation, curated product menus, and dependable maintenance from vetted Mississippi River operators.',
  keywords: 'vending services Quincy, vending machines Quincy IL, Quincy vending operators, break room vending Quincy Illinois',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-services/quincy-illinois'
  },
  openGraph: {
    title: 'Vending Machine Services in Quincy, IL - Free Installation & Service',
    description: 'Connect with trusted Quincy vending providers who handle installation, stocking, and ongoing service for healthcare, manufacturing, and education campuses.',
    url: 'https://www.thevendinglocator.com/vending-services/quincy-illinois',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machine Services in Quincy, IL - Free Installation & Service',
    description: 'Serve Blessing Health, ADM river terminals, and Quincy University with professional vending programs at no upfront cost.'
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

export default function QuincyIllinoisServicesPage() {
  return <PageClient />
}


