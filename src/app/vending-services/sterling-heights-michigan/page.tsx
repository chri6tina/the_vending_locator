import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Sterling Heights, MI - Get Free Installation & Service",
  description: "Get professional vending machine services for your Sterling Heights, Michigan business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Sterling Heights, vending machines Sterling Heights MI, vending operators Sterling Heights, break room vending Sterling Heights",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/sterling-heights-michigan"
  },
  openGraph: {
    title: "Vending Machine Services in Sterling Heights, MI - Get Free Installation & Service",
    description: "Get professional vending machine services for your Sterling Heights, Michigan business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/sterling-heights-michigan",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Sterling Heights, MI - Get Free Installation & Service",
    description: "Get professional vending machine services for your Sterling Heights, Michigan business."
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

export default function SterlingHeightsMichiganServicesPage() {
  return <PageClient />
}
