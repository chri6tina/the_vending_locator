import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Lakeville, MN - Get Free Installation & Service",
  description: "Get professional vending machine services for your Lakeville, Minnesota business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Lakeville, vending machines Lakeville MN, vending operators Lakeville, break room vending Lakeville",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/lakeville-minnesota"
  },
  openGraph: {
    title: "Vending Machine Services in Lakeville, MN - Get Free Installation & Service",
    description: "Get professional vending machine services for your Lakeville, Minnesota business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/lakeville-minnesota",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Lakeville, MN - Get Free Installation & Service",
    description: "Get professional vending machine services for your Lakeville, Minnesota business."
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

export default function LakevilleMinnesotaServicesPage() {
  return <PageClient />
}
