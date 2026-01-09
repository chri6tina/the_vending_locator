import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Adams Morgan, DC - Get Free Installation & Service",
  description: "Get professional vending machine services for your Adams Morgan, Washington DC business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Adams Morgan, vending machines Adams Morgan DC, vending operators Adams Morgan, break room vending Adams Morgan",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/adams-morgan-washington-dc"
  },
  openGraph: {
    title: "Vending Machine Services in Adams Morgan, DC - Get Free Installation & Service",
    description: "Get professional vending machine services for your Adams Morgan, Washington DC business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/adams-morgan-washington-dc",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Adams Morgan, DC - Get Free Installation & Service",
    description: "Get professional vending machine services for your Adams Morgan, Washington DC business."
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

export default function AdamsMorganWashingtonDCServicesPage() {
  return <PageClient />
}
