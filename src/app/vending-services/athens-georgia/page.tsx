import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Athens, GA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Athens, Georgia business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Athens, vending machines Athens GA, vending operators Athens, break room vending Athens",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/athens-georgia"
  },
  openGraph: {
    title: "Vending Machine Services in Athens, GA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Athens, Georgia business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/athens-georgia",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Athens, GA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Athens, Georgia business."
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

export default function AthensGeorgiaServicesPage() {
  return <PageClient />
}
