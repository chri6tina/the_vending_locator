import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Top Vending Machines in Jacksonville, Florida | The Vending Locator',
  description:
    'Explore top vending machines and trusted providers serving Jacksonville, Florida. Compare options and connect with reliable operators for your business.',
  keywords:
    'top vending machines Jacksonville, Jacksonville vending machines, vending machine companies Jacksonville, vending services Jacksonville',
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-companies/jacksonville-florida"
  },
  openGraph: {
    title: 'Top Vending Machines in Jacksonville, Florida',
    description:
      'Explore top vending machines and trusted providers serving Jacksonville, Florida. Compare options and connect with reliable operators.',
    url: "https://www.thevendinglocator.com/vending-companies/jacksonville-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: 'Top Vending Machines in Jacksonville, Florida',
    description:
      'Explore top vending machines and trusted providers serving Jacksonville, Florida.'
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

export default function JacksonvilleFloridaVendingCompaniesPage() {
  return <PageClient />
}
