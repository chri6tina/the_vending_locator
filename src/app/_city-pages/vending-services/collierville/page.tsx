import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Collierville, TN - Get Free Installation & Service",
  description: "Get professional vending machine services for your Collierville, Tennessee business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Collierville, vending machines Collierville FL, vending operators Collierville, break room vending Collierville",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/collierville"
  },
  openGraph: {
    title: "Vending Machine Services in Collierville, TN - Get Free Installation & Service",
    description: "Get professional vending machine services for your Collierville, Tennessee business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/collierville",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Collierville, TN - Get Free Installation & Service",
    description: "Get professional vending machine services for your Collierville, Tennessee business."
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

export default function ColliervilleTennesseeServicesPage() {
  return <PageClient />
}
