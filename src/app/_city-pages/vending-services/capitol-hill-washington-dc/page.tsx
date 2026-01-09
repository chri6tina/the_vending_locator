import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Capitol Hill, DC - Get Free Installation & Service",
  description: "Get professional vending machine services for your Capitol Hill, Washington DC business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Capitol Hill, vending machines Capitol Hill DC, vending operators Capitol Hill, break room vending Capitol Hill",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/capitol-hill-washington-dc"
  },
  openGraph: {
    title: "Vending Machine Services in Capitol Hill, DC - Get Free Installation & Service",
    description: "Get professional vending machine services for your Capitol Hill, Washington DC business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/capitol-hill-washington-dc",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Capitol Hill, DC - Get Free Installation & Service",
    description: "Get professional vending machine services for your Capitol Hill, Washington DC business."
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

export default function CapitolHillWashingtonDCServicesPage() {
  return <PageClient />
}
