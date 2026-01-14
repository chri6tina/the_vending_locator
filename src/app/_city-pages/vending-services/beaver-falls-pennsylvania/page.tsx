import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Beaver Falls, PA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Beaver Falls, Pennsylvania business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Beaver Falls, vending machines Beaver Falls FL, vending operators Beaver Falls, break room vending Beaver Falls",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/beaver-falls-pennsylvania"
  },
  openGraph: {
    title: "Vending Machine Services in Beaver Falls, PA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Beaver Falls, Pennsylvania business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/beaver-falls-pennsylvania",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Beaver Falls, PA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Beaver Falls, Pennsylvania business."
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

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function BeaverFallsPennsylvaniaServicesPage() {
  return <PageClient />
}
