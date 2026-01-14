import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Branson, MO - Get Free Installation & Service",
  description: "Get professional vending machine services for your Branson, Missouri business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Branson, vending machines Branson FL, vending operators Branson, break room vending Branson",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/branson-missouri"
  },
  openGraph: {
    title: "Vending Machine Services in Branson, MO - Get Free Installation & Service",
    description: "Get professional vending machine services for your Branson, Missouri business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/branson-missouri",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Branson, MO - Get Free Installation & Service",
    description: "Get professional vending machine services for your Branson, Missouri business."
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

export default function BransonMissouriServicesPage() {
  return <PageClient />
}
