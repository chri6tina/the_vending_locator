import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Gulf Breeze, FL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Gulf Breeze, Florida business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Gulf Breeze, vending machines Gulf Breeze FL, vending operators Gulf Breeze, break room vending Gulf Breeze",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/gulf-breeze-florida"
  },
  openGraph: {
    title: "Vending Machine Services in Gulf Breeze, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Gulf Breeze, Florida business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/gulf-breeze-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Gulf Breeze, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Gulf Breeze, Florida business."
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

export default function GulfBreezeFloridaServicesPage() {
  return <PageClient />
}
