import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Springdale, AR - Get Free Installation & Service",
  description: "Get professional vending machine services for your Springdale, Arkansas business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Springdale, vending machines Springdale AR, vending operators Springdale, break room vending Springdale",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/springdale-arkansas"
  },
  openGraph: {
    title: "Vending Machine Services in Springdale, AR - Get Free Installation & Service",
    description: "Get professional vending machine services for your Springdale, Arkansas business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/springdale-arkansas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Springdale, AR - Get Free Installation & Service",
    description: "Get professional vending machine services for your Springdale, Arkansas business."
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

export default function SpringdaleArkansasServicesPage() {
  return <PageClient />
}
