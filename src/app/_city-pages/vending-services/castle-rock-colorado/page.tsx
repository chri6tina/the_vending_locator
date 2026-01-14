import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Castle Rock, CO - Get Free Installation & Service",
  description: "Get professional vending machine services for your Castle Rock, Colorado business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Castle Rock, vending machines Castle Rock FL, vending operators Castle Rock, break room vending Castle Rock",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/castle-rock-colorado"
  },
  openGraph: {
    title: "Vending Machine Services in Castle Rock, CO - Get Free Installation & Service",
    description: "Get professional vending machine services for your Castle Rock, Colorado business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/castle-rock-colorado",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Castle Rock, CO - Get Free Installation & Service",
    description: "Get professional vending machine services for your Castle Rock, Colorado business."
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

export default function CastleRockColoradoServicesPage() {
  return <PageClient />
}
