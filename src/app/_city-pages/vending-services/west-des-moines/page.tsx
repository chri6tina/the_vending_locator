import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in West Des Moines, IA - Get Free Installation & Service",
  description: "Get professional vending machine services for your West Des Moines, Iowa business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services West Des Moines, vending machines West Des Moines FL, vending operators West Des Moines, break room vending West Des Moines",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/west-des-moines"
  },
  openGraph: {
    title: "Vending Machine Services in West Des Moines, IA - Get Free Installation & Service",
    description: "Get professional vending machine services for your West Des Moines, Iowa business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/west-des-moines",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in West Des Moines, IA - Get Free Installation & Service",
    description: "Get professional vending machine services for your West Des Moines, Iowa business."
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

export default function WestDesMoinesIowaServicesPage() {
  return <PageClient />
}
