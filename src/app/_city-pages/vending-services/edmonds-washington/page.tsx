import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Edmonds, WA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Edmonds, Washington business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Edmonds, vending machines Edmonds FL, vending operators Edmonds, break room vending Edmonds",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/edmonds-washington"
  },
  openGraph: {
    title: "Vending Machine Services in Edmonds, WA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Edmonds, Washington business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/edmonds-washington",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Edmonds, WA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Edmonds, Washington business."
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

export default function EdmondsWashingtonServicesPage() {
  return <PageClient />
}
