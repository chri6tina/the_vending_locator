import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Woodbury, MN - Get Free Installation & Service",
  description: "Get professional vending machine services for your Woodbury, Minnesota business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Woodbury, vending machines Woodbury MN, vending operators Woodbury, break room vending Woodbury",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/woodbury-minnesota"
  },
  openGraph: {
    title: "Vending Machine Services in Woodbury, MN - Get Free Installation & Service",
    description: "Get professional vending machine services for your Woodbury, Minnesota business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/woodbury-minnesota",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Woodbury, MN - Get Free Installation & Service",
    description: "Get professional vending machine services for your Woodbury, Minnesota business."
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

export default function WoodburyMinnesotaServicesPage() {
  return <PageClient />
}
