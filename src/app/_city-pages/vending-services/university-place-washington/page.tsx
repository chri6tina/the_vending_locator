import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in University Place, WA - Get Free Installation & Service",
  description: "Get professional vending machine services for your University Place, Washington business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services University Place, vending machines University Place FL, vending operators University Place, break room vending University Place",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/university-place-washington"
  },
  openGraph: {
    title: "Vending Machine Services in University Place, WA - Get Free Installation & Service",
    description: "Get professional vending machine services for your University Place, Washington business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/university-place-washington",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in University Place, WA - Get Free Installation & Service",
    description: "Get professional vending machine services for your University Place, Washington business."
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

export default function UniversityPlaceWashingtonServicesPage() {
  return <PageClient />
}
