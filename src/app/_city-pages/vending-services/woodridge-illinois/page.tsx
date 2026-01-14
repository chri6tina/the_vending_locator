import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Woodridge, IL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Woodridge, Illinois business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Woodridge, vending machines Woodridge FL, vending operators Woodridge, break room vending Woodridge",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/woodridge-illinois"
  },
  openGraph: {
    title: "Vending Machine Services in Woodridge, IL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Woodridge, Illinois business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/woodridge-illinois",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Woodridge, IL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Woodridge, Illinois business."
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

export default function WoodridgeIllinoisServicesPage() {
  return <PageClient />
}
