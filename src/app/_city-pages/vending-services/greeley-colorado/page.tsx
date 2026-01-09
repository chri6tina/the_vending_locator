import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Services in Greeley, CO - Free Installation & Service',
  description: 'Deliver turnkey vending machine programs to Greeley, Colorado workplaces with free installation, tailored product menus, and dependable maintenance from Northern Colorado operators.',
  keywords: 'vending services Greeley, vending machines Greeley CO, Greeley vending operators, break room vending Greeley Colorado',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-services/greeley-colorado'
  },
  openGraph: {
    title: 'Vending Machine Services in Greeley, CO - Free Installation & Service',
    description: 'Connect with vetted Greeley vending operators who handle installation, stocking, and ongoing service for your facility.',
    url: 'https://www.thevendinglocator.com/vending-services/greeley-colorado',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machine Services in Greeley, CO - Free Installation & Service',
    description: 'Serve Greeley food processing plants, energy companies, schools, and healthcare sites with professional vending at no upfront cost.'
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

export default function GreeleyColoradoServicesPage() {
  return <PageClient />
}


