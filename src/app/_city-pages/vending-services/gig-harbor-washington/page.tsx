import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Gig Harbor, WA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Gig Harbor, Washington business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Gig Harbor, vending machines Gig Harbor FL, vending operators Gig Harbor, break room vending Gig Harbor",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/gig-harbor-washington"
  },
  openGraph: {
    title: "Vending Machine Services in Gig Harbor, WA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Gig Harbor, Washington business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/gig-harbor-washington",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Gig Harbor, WA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Gig Harbor, Washington business."
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

export default function GigHarborWashingtonServicesPage() {
  return <PageClient />
}
