import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Saratoga Springs, NY - Get Free Installation & Service",
  description: "Get professional vending machine services for your Saratoga Springs, New York business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Saratoga Springs, vending machines Saratoga Springs FL, vending operators Saratoga Springs, break room vending Saratoga Springs",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/saratoga-springs-new-york"
  },
  openGraph: {
    title: "Vending Machine Services in Saratoga Springs, NY - Get Free Installation & Service",
    description: "Get professional vending machine services for your Saratoga Springs, New York business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/saratoga-springs-new-york",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Saratoga Springs, NY - Get Free Installation & Service",
    description: "Get professional vending machine services for your Saratoga Springs, New York business."
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

export default function SaratogaSpringsNewYorkServicesPage() {
  return <PageClient />
}
