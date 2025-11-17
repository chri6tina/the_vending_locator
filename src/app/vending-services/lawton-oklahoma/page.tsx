import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Services in Lawton, OK - Free Installation & Service',
  description: 'Equip Lawton, Oklahoma workplaces with turnkey vending machines, curated product assortments, and dependable maintenance from vetted Southwest Oklahoma operators.',
  keywords: 'vending services Lawton, vending machines Lawton OK, Lawton vending operators, break room vending Lawton Oklahoma',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-services/lawton-oklahoma'
  },
  openGraph: {
    title: 'Vending Machine Services in Lawton, OK - Free Installation & Service',
    description: 'Connect with trusted Lawton vending providers who handle installation, stocking, and maintenance for Fort Sill, healthcare, and manufacturing facilities.',
    url: 'https://www.thevendinglocator.com/vending-services/lawton-oklahoma',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machine Services in Lawton, OK - Free Installation & Service',
    description: 'Serve Fort Sill, Comanche County Memorial Hospital, and Lawton industry with professional vending programs at no upfront cost.'
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

export default function LawtonOklahomaServicesPage() {
  return <PageClient />
}


