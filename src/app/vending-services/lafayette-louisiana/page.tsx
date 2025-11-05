import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Lafayette, LA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Lafayette, Louisiana business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Lafayette, vending machines Lafayette LA, vending operators Lafayette, break room vending Lafayette",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/lafayette-louisiana"
  },
  openGraph: {
    title: "Vending Machine Services in Lafayette, LA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Lafayette, Louisiana business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/lafayette-louisiana",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Lafayette, LA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Lafayette, Louisiana business."
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

export default function LafayetteLouisianaServicesPage() {
  return <PageClient />
}
