import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Sunnyvale, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Sunnyvale, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Sunnyvale, vending machines Sunnyvale CA, vending operators Sunnyvale, break room vending Sunnyvale",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/sunnyvale-california"
  },
  openGraph: {
    title: "Vending Machine Services in Sunnyvale, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Sunnyvale, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/sunnyvale-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Sunnyvale, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Sunnyvale, California business."
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

export default function SunnyvaleCaliforniaServicesPage() {
  return <PageClient />
}
