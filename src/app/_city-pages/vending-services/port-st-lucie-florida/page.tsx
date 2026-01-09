import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Port St. Lucie, FL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Port St. Lucie, Florida business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Port St. Lucie, vending machines Port St. Lucie FL, vending operators Port St. Lucie, break room vending Port St. Lucie",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/port-st-lucie-florida"
  },
  openGraph: {
    title: "Vending Machine Services in Port St. Lucie, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Port St. Lucie, Florida business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/port-st-lucie-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Port St. Lucie, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Port St. Lucie, Florida business."
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

export default function PortStLucieServicesPage() {
  return <PageClient />
}
