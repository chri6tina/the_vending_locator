import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Gahanna, OH - Get Free Installation & Service",
  description: "Get professional vending machine services for your Gahanna, Ohio business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Gahanna, vending machines Gahanna FL, vending operators Gahanna, break room vending Gahanna",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/gahanna-ohio"
  },
  openGraph: {
    title: "Vending Machine Services in Gahanna, OH - Get Free Installation & Service",
    description: "Get professional vending machine services for your Gahanna, Ohio business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/gahanna-ohio",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Gahanna, OH - Get Free Installation & Service",
    description: "Get professional vending machine services for your Gahanna, Ohio business."
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

export default function GahannaOhioServicesPage() {
  return <PageClient />
}
