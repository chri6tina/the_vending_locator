import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Elkton, MD - Get Free Installation & Service",
  description: "Get professional vending machine services for your Elkton, Maryland business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Elkton, vending machines Elkton FL, vending operators Elkton, break room vending Elkton",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/elkton-maryland"
  },
  openGraph: {
    title: "Vending Machine Services in Elkton, MD - Get Free Installation & Service",
    description: "Get professional vending machine services for your Elkton, Maryland business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/elkton-maryland",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Elkton, MD - Get Free Installation & Service",
    description: "Get professional vending machine services for your Elkton, Maryland business."
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

export default function ElktonMarylandServicesPage() {
  return <PageClient />
}
