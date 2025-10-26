import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Salt Lake City, UT - Get Free Installation & Service",
  description: "Get professional vending machine services for your Salt Lake City, Utah business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Salt Lake City, vending machines Salt Lake City UT, vending operators Salt Lake City, break room vending Salt Lake City",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/salt-lake-city-utah"
  },
  openGraph: {
    title: "Vending Machine Services in Salt Lake City, UT - Get Free Installation & Service",
    description: "Get professional vending machine services for your Salt Lake City, Utah business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/salt-lake-city-utah",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Salt Lake City, UT - Get Free Installation & Service",
    description: "Get professional vending machine services for your Salt Lake City, Utah business."
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

export default function SaltLakeCityUtahServicesPage() {
  return <PageClient />
}
