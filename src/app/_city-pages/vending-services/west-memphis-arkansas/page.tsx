import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in West Memphis, AR - Get Free Installation & Service",
  description: "Get professional vending machine services for your West Memphis, Arkansas business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services West Memphis, vending machines West Memphis FL, vending operators West Memphis, break room vending West Memphis",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/west-memphis-arkansas"
  },
  openGraph: {
    title: "Vending Machine Services in West Memphis, AR - Get Free Installation & Service",
    description: "Get professional vending machine services for your West Memphis, Arkansas business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/west-memphis-arkansas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in West Memphis, AR - Get Free Installation & Service",
    description: "Get professional vending machine services for your West Memphis, Arkansas business."
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

export default function WestMemphisArkansasServicesPage() {
  return <PageClient />
}
