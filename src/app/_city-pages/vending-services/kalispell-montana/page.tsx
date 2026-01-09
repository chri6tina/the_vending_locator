import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Services in Kalispell, MT - Free Installation & Service',
  description: 'Bring turnkey vending machine programs to Kalispell, Montana workplaces with free installation, curated product menus, and ongoing maintenance from Flathead Valley operators.',
  keywords: 'vending services Kalispell, vending machines Kalispell MT, Kalispell vending operators, break room vending Kalispell Montana',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-services/kalispell-montana'
  },
  openGraph: {
    title: 'Vending Machine Services in Kalispell, MT - Free Installation & Service',
    description: 'Connect with vetted Kalispell vending operators who handle installation, stocking, and maintenance across the Flathead Valley.',
    url: 'https://www.thevendinglocator.com/vending-services/kalispell-montana',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machine Services in Kalispell, MT - Free Installation & Service',
    description: 'Serve Kalispell hospitals, resorts, manufacturers, and schools with professional vending solutions at no upfront cost.'
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

export default function KalispellMontanaServicesPage() {
  return <PageClient />
}


