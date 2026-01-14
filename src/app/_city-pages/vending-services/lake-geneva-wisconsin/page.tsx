import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Lake Geneva, WI - Get Free Installation & Service",
  description: "Get professional vending machine services for your Lake Geneva, Wisconsin business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Lake Geneva, vending machines Lake Geneva FL, vending operators Lake Geneva, break room vending Lake Geneva",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/lake-geneva-wisconsin"
  },
  openGraph: {
    title: "Vending Machine Services in Lake Geneva, WI - Get Free Installation & Service",
    description: "Get professional vending machine services for your Lake Geneva, Wisconsin business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/lake-geneva-wisconsin",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Lake Geneva, WI - Get Free Installation & Service",
    description: "Get professional vending machine services for your Lake Geneva, Wisconsin business."
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

export default function LakeGenevaWisconsinServicesPage() {
  return <PageClient />
}
