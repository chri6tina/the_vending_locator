import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Jackson, TN - Get Free Installation & Service",
  description: "Get professional vending machine services for your Jackson, Tennessee business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Jackson, vending machines Jackson TN, vending operators Jackson, break room vending Jackson",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/jackson-tennessee"
  },
  openGraph: {
    title: "Vending Machine Services in Jackson, TN - Get Free Installation & Service",
    description: "Get professional vending machine services for your Jackson, Tennessee business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/jackson-tennessee",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Jackson, TN - Get Free Installation & Service",
    description: "Get professional vending machine services for your Jackson, Tennessee business."
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

export default function JacksonTennesseeServicesPage() {
  return <PageClient />
}
