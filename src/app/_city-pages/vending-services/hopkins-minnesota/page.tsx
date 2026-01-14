import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Hopkins, MN - Get Free Installation & Service",
  description: "Get professional vending machine services for your Hopkins, Minnesota business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Hopkins, vending machines Hopkins FL, vending operators Hopkins, break room vending Hopkins",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/hopkins-minnesota"
  },
  openGraph: {
    title: "Vending Machine Services in Hopkins, MN - Get Free Installation & Service",
    description: "Get professional vending machine services for your Hopkins, Minnesota business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/hopkins-minnesota",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Hopkins, MN - Get Free Installation & Service",
    description: "Get professional vending machine services for your Hopkins, Minnesota business."
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

export default function HopkinsMinnesotaServicesPage() {
  return <PageClient />
}
