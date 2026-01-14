import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Lilburn, GA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Lilburn, Georgia business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Lilburn, vending machines Lilburn FL, vending operators Lilburn, break room vending Lilburn",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/lilburn-georgia"
  },
  openGraph: {
    title: "Vending Machine Services in Lilburn, GA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Lilburn, Georgia business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/lilburn-georgia",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Lilburn, GA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Lilburn, Georgia business."
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

export default function LilburnGeorgiaServicesPage() {
  return <PageClient />
}
