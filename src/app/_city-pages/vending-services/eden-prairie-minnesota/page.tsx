import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Eden Prairie, MN - Get Free Installation & Service",
  description: "Get professional vending machine services for your Eden Prairie, Minnesota business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Eden Prairie, vending machines Eden Prairie FL, vending operators Eden Prairie, break room vending Eden Prairie",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/eden-prairie-minnesota"
  },
  openGraph: {
    title: "Vending Machine Services in Eden Prairie, MN - Get Free Installation & Service",
    description: "Get professional vending machine services for your Eden Prairie, Minnesota business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/eden-prairie-minnesota",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Eden Prairie, MN - Get Free Installation & Service",
    description: "Get professional vending machine services for your Eden Prairie, Minnesota business."
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

export default function EdenPrairieMinnesotaServicesPage() {
  return <PageClient />
}
