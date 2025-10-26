import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Greensboro, NC - Get Free Installation & Service",
  description: "Get professional vending machine services for your Greensboro, North Carolina business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Greensboro, vending machines Greensboro NC, vending operators Greensboro, break room vending Greensboro",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/greensboro-north-carolina"
  },
  openGraph: {
    title: "Vending Machine Services in Greensboro, NC - Get Free Installation & Service",
    description: "Get professional vending machine services for your Greensboro, North Carolina business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/greensboro-north-carolina",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Greensboro, NC - Get Free Installation & Service",
    description: "Get professional vending machine services for your Greensboro, North Carolina business."
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

export default function GreensboroNorthCarolinaServicesPage() {
  return <PageClient />
}
