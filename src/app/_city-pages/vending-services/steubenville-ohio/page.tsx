import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Steubenville, OH - Get Free Installation & Service",
  description: "Get professional vending machine services for your Steubenville, Ohio business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Steubenville, vending machines Steubenville FL, vending operators Steubenville, break room vending Steubenville",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/steubenville-ohio"
  },
  openGraph: {
    title: "Vending Machine Services in Steubenville, OH - Get Free Installation & Service",
    description: "Get professional vending machine services for your Steubenville, Ohio business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/steubenville-ohio",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Steubenville, OH - Get Free Installation & Service",
    description: "Get professional vending machine services for your Steubenville, Ohio business."
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

export default function SteubenvilleOhioServicesPage() {
  return <PageClient />
}
