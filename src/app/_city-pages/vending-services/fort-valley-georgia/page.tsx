import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Fort Valley, GA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Fort Valley, Georgia business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Fort Valley, vending machines Fort Valley FL, vending operators Fort Valley, break room vending Fort Valley",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/fort-valley-georgia"
  },
  openGraph: {
    title: "Vending Machine Services in Fort Valley, GA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Fort Valley, Georgia business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/fort-valley-georgia",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Fort Valley, GA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Fort Valley, Georgia business."
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

export default function FortValleyGeorgiaServicesPage() {
  return <PageClient />
}
