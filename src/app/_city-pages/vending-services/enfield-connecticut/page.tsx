import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Enfield, CT - Get Free Installation & Service",
  description: "Get professional vending machine services for your Enfield, Connecticut business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Enfield, vending machines Enfield FL, vending operators Enfield, break room vending Enfield",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/enfield-connecticut"
  },
  openGraph: {
    title: "Vending Machine Services in Enfield, CT - Get Free Installation & Service",
    description: "Get professional vending machine services for your Enfield, Connecticut business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/enfield-connecticut",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Enfield, CT - Get Free Installation & Service",
    description: "Get professional vending machine services for your Enfield, Connecticut business."
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

export default function EnfieldConnecticutServicesPage() {
  return <PageClient />
}
