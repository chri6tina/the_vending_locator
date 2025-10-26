import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Pittsburgh, PA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Pittsburgh, Pennsylvania business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Pittsburgh, vending machines Pittsburgh PA, vending operators Pittsburgh, break room vending Pittsburgh",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/pittsburgh-pennsylvania"
  },
  openGraph: {
    title: "Vending Machine Services in Pittsburgh, PA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Pittsburgh, Pennsylvania business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/pittsburgh-pennsylvania",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Pittsburgh, PA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Pittsburgh, Pennsylvania business."
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

export default function PittsburghPennsylvaniaServicesPage() {
  return <PageClient />
}
