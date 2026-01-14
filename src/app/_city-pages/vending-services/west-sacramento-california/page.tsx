import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in West Sacramento, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your West Sacramento, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services West Sacramento, vending machines West Sacramento FL, vending operators West Sacramento, break room vending West Sacramento",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/west-sacramento-california"
  },
  openGraph: {
    title: "Vending Machine Services in West Sacramento, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your West Sacramento, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/west-sacramento-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in West Sacramento, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your West Sacramento, California business."
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

export default function WestSacramentoCaliforniaServicesPage() {
  return <PageClient />
}
