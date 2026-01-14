import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Carol Stream, IL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Carol Stream, Illinois business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Carol Stream, vending machines Carol Stream FL, vending operators Carol Stream, break room vending Carol Stream",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/carol-stream-illinois"
  },
  openGraph: {
    title: "Vending Machine Services in Carol Stream, IL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Carol Stream, Illinois business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/carol-stream-illinois",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Carol Stream, IL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Carol Stream, Illinois business."
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

export default function CarolStreamIllinoisServicesPage() {
  return <PageClient />
}
