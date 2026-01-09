import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Roswell, GA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Roswell, Georgia business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Roswell, vending machines Roswell GA, vending operators Roswell, break room vending Roswell",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/roswell-georgia"
  },
  openGraph: {
    title: "Vending Machine Services in Roswell, GA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Roswell, Georgia business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/roswell-georgia",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Roswell, GA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Roswell, Georgia business."
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

export default function RoswellGeorgiaServicesPage() {
  return <PageClient />
}
