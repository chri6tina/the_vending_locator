import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Benton Harbor, MI - Get Free Installation & Service",
  description: "Get professional vending machine services for your Benton Harbor, Michigan business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Benton Harbor, vending machines Benton Harbor FL, vending operators Benton Harbor, break room vending Benton Harbor",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/benton-harbor-michigan"
  },
  openGraph: {
    title: "Vending Machine Services in Benton Harbor, MI - Get Free Installation & Service",
    description: "Get professional vending machine services for your Benton Harbor, Michigan business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/benton-harbor-michigan",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Benton Harbor, MI - Get Free Installation & Service",
    description: "Get professional vending machine services for your Benton Harbor, Michigan business."
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

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function BentonHarborMichiganServicesPage() {
  return <PageClient />
}
