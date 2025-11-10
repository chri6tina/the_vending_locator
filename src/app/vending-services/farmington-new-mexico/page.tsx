import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Services in Farmington, NM - Free Installation & Service',
  description: 'Connect your Farmington, New Mexico workplace with vetted vending operators who provide free installation, tailored product menus, and dependable maintenance across San Juan County.',
  keywords: 'vending services Farmington, vending machines Farmington NM, Farmington vending operators, break room vending Farmington New Mexico',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-services/farmington-new-mexico'
  },
  openGraph: {
    title: 'Vending Machine Services in Farmington, NM - Free Installation & Service',
    description: 'Serve your Farmington teams with professional vending machine solutions that include free setup, stocking, and maintenance.',
    url: 'https://www.thevendinglocator.com/vending-services/farmington-new-mexico',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machine Services in Farmington, NM - Free Installation & Service',
    description: 'Link up with Farmington vending operators who handle installation, product stocking, and ongoing service at no cost.'
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

export default function FarmingtonNewMexicoServicesPage() {
  return <PageClient />
}


