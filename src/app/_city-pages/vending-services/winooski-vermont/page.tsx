import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Winooski, VT - Get Free Installation & Service",
  description: "Get professional vending machine services for your Winooski, Vermont business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Winooski, vending machines Winooski FL, vending operators Winooski, break room vending Winooski",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/winooski-vermont"
  },
  openGraph: {
    title: "Vending Machine Services in Winooski, VT - Get Free Installation & Service",
    description: "Get professional vending machine services for your Winooski, Vermont business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/winooski-vermont",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Winooski, VT - Get Free Installation & Service",
    description: "Get professional vending machine services for your Winooski, Vermont business."
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

export default function WinooskiVermontServicesPage() {
  return <PageClient />
}
