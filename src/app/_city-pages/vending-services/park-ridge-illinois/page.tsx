import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Park Ridge, IL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Park Ridge, Illinois business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Park Ridge, vending machines Park Ridge FL, vending operators Park Ridge, break room vending Park Ridge",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/park-ridge-illinois"
  },
  openGraph: {
    title: "Vending Machine Services in Park Ridge, IL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Park Ridge, Illinois business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/park-ridge-illinois",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Park Ridge, IL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Park Ridge, Illinois business."
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

export default function ParkRidgeIllinoisServicesPage() {
  return <PageClient />
}
