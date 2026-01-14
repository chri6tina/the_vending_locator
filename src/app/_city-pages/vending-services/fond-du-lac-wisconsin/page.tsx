import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Fond du Lac, WI - Get Free Installation & Service",
  description: "Get professional vending machine services for your Fond du Lac, Wisconsin business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Fond du Lac, vending machines Fond du Lac FL, vending operators Fond du Lac, break room vending Fond du Lac",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/fond-du-lac-wisconsin"
  },
  openGraph: {
    title: "Vending Machine Services in Fond du Lac, WI - Get Free Installation & Service",
    description: "Get professional vending machine services for your Fond du Lac, Wisconsin business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/fond-du-lac-wisconsin",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Fond du Lac, WI - Get Free Installation & Service",
    description: "Get professional vending machine services for your Fond du Lac, Wisconsin business."
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

export default function FondduLacWisconsinServicesPage() {
  return <PageClient />
}
