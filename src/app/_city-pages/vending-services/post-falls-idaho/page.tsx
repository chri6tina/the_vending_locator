import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Post Falls, ID - Get Free Installation & Service",
  description: "Get professional vending machine services for your Post Falls, Idaho business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Post Falls, vending machines Post Falls FL, vending operators Post Falls, break room vending Post Falls",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/post-falls-idaho"
  },
  openGraph: {
    title: "Vending Machine Services in Post Falls, ID - Get Free Installation & Service",
    description: "Get professional vending machine services for your Post Falls, Idaho business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/post-falls-idaho",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Post Falls, ID - Get Free Installation & Service",
    description: "Get professional vending machine services for your Post Falls, Idaho business."
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

export default function PostFallsIdahoServicesPage() {
  return <PageClient />
}
