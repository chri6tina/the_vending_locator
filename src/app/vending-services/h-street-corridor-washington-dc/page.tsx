import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in H Street Corridor, DC - Get Free Installation & Service",
  description: "Get professional vending machine services for your H Street Corridor, Washington DC business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services H Street Corridor, vending machines H Street Corridor DC, vending operators H Street Corridor, break room vending H Street Corridor",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/h-street-corridor-washington-dc"
  },
  openGraph: {
    title: "Vending Machine Services in H Street Corridor, DC - Get Free Installation & Service",
    description: "Get professional vending machine services for your H Street Corridor, Washington DC business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/h-street-corridor-washington-dc",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in H Street Corridor, DC - Get Free Installation & Service",
    description: "Get professional vending machine services for your H Street Corridor, Washington DC business."
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

export default function HStreetCorridorWashingtonDCServicesPage() {
  return <PageClient />
}
