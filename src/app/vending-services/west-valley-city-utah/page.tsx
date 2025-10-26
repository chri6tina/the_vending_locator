import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in West Valley City, UT - Get Free Installation & Service",
  description: "Get professional vending machine services for your West Valley City, Utah business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services West Valley City, vending machines West Valley City UT, vending operators West Valley City, break room vending West Valley City",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/west-valley-city-utah"
  },
  openGraph: {
    title: "Vending Machine Services in West Valley City, UT - Get Free Installation & Service",
    description: "Get professional vending machine services for your West Valley City, Utah business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/west-valley-city-utah",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in West Valley City, UT - Get Free Installation & Service",
    description: "Get professional vending machine services for your West Valley City, Utah business."
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

export default function WestValleyCityUtahServicesPage() {
  return <PageClient />
}
