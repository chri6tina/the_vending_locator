import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Dayton, OH - Get Free Installation & Service",
  description: "Get professional vending machine services for your Dayton, Ohio business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Dayton, vending machines Dayton OH, vending operators Dayton, break room vending Dayton",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/dayton-ohio"
  },
  openGraph: {
    title: "Vending Machine Services in Dayton, OH - Get Free Installation & Service",
    description: "Get professional vending machine services for your Dayton, Ohio business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/dayton-ohio",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Dayton, OH - Get Free Installation & Service",
    description: "Get professional vending machine services for your Dayton, Ohio business."
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

export default function DaytonOhioServicesPage() {
  return <PageClient />
}
