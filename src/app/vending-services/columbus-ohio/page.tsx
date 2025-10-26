import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Columbus, OH - Get Free Installation & Service",
  description: "Get professional vending machine services for your Columbus, Ohio business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Columbus, vending machines Columbus OH, vending operators Columbus, break room vending Columbus",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/columbus-ohio"
  },
  openGraph: {
    title: "Vending Machine Services in Columbus, OH - Get Free Installation & Service",
    description: "Get professional vending machine services for your Columbus, Ohio business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/columbus-ohio",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Columbus, OH - Get Free Installation & Service",
    description: "Get professional vending machine services for your Columbus, Ohio business."
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

export default function ColumbusOhioServicesPage() {
  return <PageClient />
}
