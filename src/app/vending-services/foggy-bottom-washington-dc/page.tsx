import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Foggy Bottom, DC - Get Free Installation & Service",
  description: "Get professional vending machine services for your Foggy Bottom, Washington DC business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Foggy Bottom, vending machines Foggy Bottom DC, vending operators Foggy Bottom, break room vending Foggy Bottom",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/foggy-bottom-washington-dc"
  },
  openGraph: {
    title: "Vending Machine Services in Foggy Bottom, DC - Get Free Installation & Service",
    description: "Get professional vending machine services for your Foggy Bottom, Washington DC business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/foggy-bottom-washington-dc",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Foggy Bottom, DC - Get Free Installation & Service",
    description: "Get professional vending machine services for your Foggy Bottom, Washington DC business."
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

export default function FoggyBottomWashingtonDCServicesPage() {
  return <PageClient />
}
