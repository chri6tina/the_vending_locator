import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Atlanta, GA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Atlanta, Georgia business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Atlanta, vending machines Atlanta GA, vending operators Atlanta, break room vending Atlanta",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/atlanta-georgia"
  },
  openGraph: {
    title: "Vending Machine Services in Atlanta, GA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Atlanta, Georgia business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/atlanta-georgia",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Atlanta, GA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Atlanta, Georgia business."
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

export default function AtlantaGeorgiaServicesPage() {
  return <PageClient />
}
