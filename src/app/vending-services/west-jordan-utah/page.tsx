import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in West Jordan, UT - Get Free Installation & Service",
  description: "Get professional vending machine services for your West Jordan, Utah business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services West Jordan, vending machines West Jordan UT, vending operators West Jordan, break room vending West Jordan",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/west-jordan-utah"
  },
  openGraph: {
    title: "Vending Machine Services in West Jordan, UT - Get Free Installation & Service",
    description: "Get professional vending machine services for your West Jordan, Utah business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/west-jordan-utah",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in West Jordan, UT - Get Free Installation & Service",
    description: "Get professional vending machine services for your West Jordan, Utah business."
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

export default function WestJordanUtahServicesPage() {
  return <PageClient />
}
