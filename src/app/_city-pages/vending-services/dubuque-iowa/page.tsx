import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Services in Dubuque, IA - Free Installation & Maintenance',
  description: 'Bring full-service vending to Dubuque, Iowa workplaces with free installation, tailored product menus, and reliable maintenance from vetted local operators.',
  keywords: 'vending services Dubuque, vending machines Dubuque IA, Dubuque vending operators, break room vending Dubuque Iowa',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-services/dubuque-iowa'
  },
  openGraph: {
    title: 'Vending Machine Services in Dubuque, IA - Free Installation & Maintenance',
    description: 'Connect with trusted Dubuque vending operators for turnkey installation, stocking, and service across the Tri-State area.',
    url: 'https://www.thevendinglocator.com/vending-services/dubuque-iowa',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machine Services in Dubuque, IA - Free Installation & Maintenance',
    description: 'Serve Dubuque hospitals, manufacturers, universities, and riverfront attractions with professional vending machines at no upfront cost.'
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

export default function DubuqueIowaServicesPage() {
  return <PageClient />
}


