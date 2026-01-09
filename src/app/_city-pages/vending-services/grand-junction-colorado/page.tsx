import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Services in Grand Junction, CO - Free Installation & Service',
  description: 'Deliver reliable vending machine programs to Grand Junction, Colorado workplaces with free installation, custom product menus, and ongoing maintenance from Western Slope operators.',
  keywords: 'vending services Grand Junction, vending machines Grand Junction CO, Grand Junction vending operators, break room vending Grand Junction Colorado',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-services/grand-junction-colorado'
  },
  openGraph: {
    title: 'Vending Machine Services in Grand Junction, CO - Free Installation & Service',
    description: 'Connect with Grand Junction vending operators who handle installation, stocking, and maintenance across the Western Slope.',
    url: 'https://www.thevendinglocator.com/vending-services/grand-junction-colorado',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machine Services in Grand Junction, CO - Free Installation & Service',
    description: 'Serve Western Slope offices, hospitals, and energy crews with turnkey vending machine solutions at no upfront cost.'
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

export default function GrandJunctionColoradoServicesPage() {
  return <PageClient />
}


