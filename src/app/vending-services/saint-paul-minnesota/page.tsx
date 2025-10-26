import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Saint Paul, MN - Get Free Installation & Service",
  description: "Get professional vending machine services for your Saint Paul, Minnesota business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Saint Paul, vending machines Saint Paul MN, vending operators Saint Paul, break room vending Saint Paul",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/saint-paul-minnesota"
  },
  openGraph: {
    title: "Vending Machine Services in Saint Paul, MN - Get Free Installation & Service",
    description: "Get professional vending machine services for your Saint Paul, Minnesota business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/saint-paul-minnesota",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Saint Paul, MN - Get Free Installation & Service",
    description: "Get professional vending machine services for your Saint Paul, Minnesota business."
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

export default function SaintPaulMinnesotaServicesPage() {
  return <PageClient />
}
