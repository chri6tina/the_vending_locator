import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Services in Lawrence, KS - Free Installation & Service',
  description: 'Provide your Lawrence, Kansas workplace with modern vending machines, tailored product menus, and ongoing maintenance from vetted operators covering Douglas County.',
  keywords: 'vending services Lawrence, vending machines Lawrence KS, Lawrence vending operators, break room vending Lawrence Kansas',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-services/lawrence-kansas'
  },
  openGraph: {
    title: 'Vending Machine Services in Lawrence, KS - Free Installation & Service',
    description: 'Connect with trusted Lawrence vending operators for turnkey installation, stocking, and service designed for Jayhawk country.',
    url: 'https://www.thevendinglocator.com/vending-services/lawrence-kansas',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machine Services in Lawrence, KS - Free Installation & Service',
    description: 'Serve KU campuses, biotech labs, manufacturers, and downtown offices with professional vending solutions at no upfront cost.'
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

export default function LawrenceKansasServicesPage() {
  return <PageClient />
}


