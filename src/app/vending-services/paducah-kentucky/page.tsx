import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Services in Paducah, KY - Free Installation & Service',
  description: 'Equip Paducah, Kentucky workplaces with turnkey vending machines, curated product assortments, and dependable maintenance from vetted Western Kentucky operators.',
  keywords: 'vending services Paducah, vending machines Paducah KY, Paducah vending operators, break room vending Paducah Kentucky',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-services/paducah-kentucky'
  },
  openGraph: {
    title: 'Vending Machine Services in Paducah, KY - Free Installation & Service',
    description: 'Connect with trusted Paducah vending providers who handle installation, stocking, and ongoing service for riverport industry, healthcare, and education campuses.',
    url: 'https://www.thevendinglocator.com/vending-services/paducah-kentucky',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machine Services in Paducah, KY - Free Installation & Service',
    description: 'Serve riverfront manufacturers, Baptist Health teams, and WKCTC students with professional vending at no upfront cost.'
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

export default function PaducahKentuckyServicesPage() {
  return <PageClient />
}


