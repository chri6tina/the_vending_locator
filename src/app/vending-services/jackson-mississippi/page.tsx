import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Jackson, MS - Get Free Installation & Service",
  description: "Get professional vending machine services for your Jackson, Mississippi business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Jackson, vending machines Jackson MS, vending operators Jackson, break room vending Jackson",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/jackson-mississippi"
  },
  openGraph: {
    title: "Vending Machine Services in Jackson, MS - Get Free Installation & Service",
    description: "Get professional vending machine services for your Jackson, Mississippi business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/jackson-mississippi",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Jackson, MS - Get Free Installation & Service",
    description: "Get professional vending machine services for your Jackson, Mississippi business."
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

export default function JacksonMississippiServicesPage() {
  return <PageClient />
}
