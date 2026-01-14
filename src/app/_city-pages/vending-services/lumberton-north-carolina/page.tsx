import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Lumberton, NC - Get Free Installation & Service",
  description: "Get professional vending machine services for your Lumberton, North Carolina business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Lumberton, vending machines Lumberton FL, vending operators Lumberton, break room vending Lumberton",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/lumberton-north-carolina"
  },
  openGraph: {
    title: "Vending Machine Services in Lumberton, NC - Get Free Installation & Service",
    description: "Get professional vending machine services for your Lumberton, North Carolina business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/lumberton-north-carolina",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Lumberton, NC - Get Free Installation & Service",
    description: "Get professional vending machine services for your Lumberton, North Carolina business."
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

export default function LumbertonNorthCarolinaServicesPage() {
  return <PageClient />
}
