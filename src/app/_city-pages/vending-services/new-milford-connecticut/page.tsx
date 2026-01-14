import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in New Milford, CT - Get Free Installation & Service",
  description: "Get professional vending machine services for your New Milford, Connecticut business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services New Milford, vending machines New Milford FL, vending operators New Milford, break room vending New Milford",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/new-milford-connecticut"
  },
  openGraph: {
    title: "Vending Machine Services in New Milford, CT - Get Free Installation & Service",
    description: "Get professional vending machine services for your New Milford, Connecticut business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/new-milford-connecticut",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in New Milford, CT - Get Free Installation & Service",
    description: "Get professional vending machine services for your New Milford, Connecticut business."
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

export default function NewMilfordConnecticutServicesPage() {
  return <PageClient />
}
