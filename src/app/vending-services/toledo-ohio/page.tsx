import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Toledo, OH - Get Free Installation & Service",
  description: "Get professional vending machine services for your Toledo, Ohio business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Toledo, vending machines Toledo OH, vending operators Toledo, break room vending Toledo",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/toledo-ohio"
  },
  openGraph: {
    title: "Vending Machine Services in Toledo, OH - Get Free Installation & Service",
    description: "Get professional vending machine services for your Toledo, Ohio business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/toledo-ohio",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Toledo, OH - Get Free Installation & Service",
    description: "Get professional vending machine services for your Toledo, Ohio business."
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

export default function ToledoOhioServicesPage() {
  return <PageClient />
}
