import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Pittsburg, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Pittsburg, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Pittsburg, vending machines Pittsburg FL, vending operators Pittsburg, break room vending Pittsburg",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/pittsburg-california"
  },
  openGraph: {
    title: "Vending Machine Services in Pittsburg, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Pittsburg, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/pittsburg-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Pittsburg, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Pittsburg, California business."
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

export default function PittsburgCaliforniaServicesPage() {
  return <PageClient />
}
