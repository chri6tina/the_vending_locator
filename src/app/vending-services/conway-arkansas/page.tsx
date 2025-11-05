import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Conway, AR - Get Free Installation & Service",
  description: "Get professional vending machine services for your Conway, Arkansas business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Conway, vending machines Conway AR, vending operators Conway, break room vending Conway",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/conway-arkansas"
  },
  openGraph: {
    title: "Vending Machine Services in Conway, AR - Get Free Installation & Service",
    description: "Get professional vending machine services for your Conway, Arkansas business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/conway-arkansas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Conway, AR - Get Free Installation & Service",
    description: "Get professional vending machine services for your Conway, Arkansas business."
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

export default function ConwayArkansasServicesPage() {
  return <PageClient />
}
