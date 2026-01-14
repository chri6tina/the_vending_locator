import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Morgan City, LA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Morgan City, Louisiana business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Morgan City, vending machines Morgan City FL, vending operators Morgan City, break room vending Morgan City",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/morgan-city-louisiana"
  },
  openGraph: {
    title: "Vending Machine Services in Morgan City, LA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Morgan City, Louisiana business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/morgan-city-louisiana",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Morgan City, LA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Morgan City, Louisiana business."
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

export default function MorganCityLouisianaServicesPage() {
  return <PageClient />
}
