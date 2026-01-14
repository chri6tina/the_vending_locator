import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in The Dalles, OR - Get Free Installation & Service",
  description: "Get professional vending machine services for your The Dalles, Oregon business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services The Dalles, vending machines The Dalles FL, vending operators The Dalles, break room vending The Dalles",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/the-dalles-oregon"
  },
  openGraph: {
    title: "Vending Machine Services in The Dalles, OR - Get Free Installation & Service",
    description: "Get professional vending machine services for your The Dalles, Oregon business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/the-dalles-oregon",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in The Dalles, OR - Get Free Installation & Service",
    description: "Get professional vending machine services for your The Dalles, Oregon business."
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

export default function TheDallesOregonServicesPage() {
  return <PageClient />
}
