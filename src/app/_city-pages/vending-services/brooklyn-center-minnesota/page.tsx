import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Brooklyn Center, MN - Get Free Installation & Service",
  description: "Get professional vending machine services for your Brooklyn Center, Minnesota business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Brooklyn Center, vending machines Brooklyn Center FL, vending operators Brooklyn Center, break room vending Brooklyn Center",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/brooklyn-center-minnesota"
  },
  openGraph: {
    title: "Vending Machine Services in Brooklyn Center, MN - Get Free Installation & Service",
    description: "Get professional vending machine services for your Brooklyn Center, Minnesota business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/brooklyn-center-minnesota",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Brooklyn Center, MN - Get Free Installation & Service",
    description: "Get professional vending machine services for your Brooklyn Center, Minnesota business."
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

export default function BrooklynCenterMinnesotaServicesPage() {
  return <PageClient />
}
