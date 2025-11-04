import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Novi, MI - Get Free Installation & Service",
  description: "Get professional vending machine services for your Novi, Michigan business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Novi, vending machines Novi MI, vending operators Novi, break room vending Novi",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/novi-michigan"
  },
  openGraph: {
    title: "Vending Machine Services in Novi, MI - Get Free Installation & Service",
    description: "Get professional vending machine services for your Novi, Michigan business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/novi-michigan",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Novi, MI - Get Free Installation & Service",
    description: "Get professional vending machine services for your Novi, Michigan business."
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

export default function NoviMichiganServicesPage() {
  return <PageClient />
}
