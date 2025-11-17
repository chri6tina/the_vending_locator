import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Services in Mankato, MN - Free Installation & Service',
  description: 'Equip Mankato, Minnesota workplaces with turnkey vending machines, curated product assortments, and dependable maintenance from vetted Southern Minnesota operators.',
  keywords: 'vending services Mankato, vending machines Mankato MN, Mankato vending operators, break room vending Mankato Minnesota',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-services/mankato-minnesota'
  },
  openGraph: {
    title: 'Vending Machine Services in Mankato, MN - Free Installation & Service',
    description: 'Connect with trusted Mankato vending providers who handle installation, stocking, and maintenance for manufacturing, healthcare, and university campuses.',
    url: 'https://www.thevendinglocator.com/vending-services/mankato-minnesota',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machine Services in Mankato, MN - Free Installation & Service',
    description: 'Serve Mayo Clinic, Minnesota State University, and River Hills businesses with professional vending programs at no upfront cost.'
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

export default function MankatoMinnesotaServicesPage() {
  return <PageClient />
}


