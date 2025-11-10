import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Services in New Britain, CT - Free Installation & Service',
  description: 'Deliver reliable vending machine programs to New Britain, Connecticut workplaces with free installation, tailored product menus, and ongoing maintenance.',
  keywords: 'vending services New Britain, vending machines New Britain CT, New Britain vending operators, break room vending New Britain Connecticut',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-services/new-britain-connecticut'
  },
  openGraph: {
    title: 'Vending Machine Services in New Britain, CT - Free Installation & Service',
    description: 'Connect with vetted New Britain vending operators for turnkey installation, stocking, and maintenance tailored to Hardware City employers.',
    url: 'https://www.thevendinglocator.com/vending-services/new-britain-connecticut',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machine Services in New Britain, CT - Free Installation & Service',
    description: 'Bring full-service vending to New Britain manufacturers, universities, hospitals, and offices—no upfront cost required.'
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

export default function NewBritainConnecticutServicesPage() {
  return <PageClient />
}


