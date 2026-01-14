import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Eunice, LA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Eunice, Louisiana business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Eunice, vending machines Eunice FL, vending operators Eunice, break room vending Eunice",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/eunice-louisiana"
  },
  openGraph: {
    title: "Vending Machine Services in Eunice, LA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Eunice, Louisiana business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/eunice-louisiana",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Eunice, LA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Eunice, Louisiana business."
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

export default function EuniceLouisianaServicesPage() {
  return <PageClient />
}
