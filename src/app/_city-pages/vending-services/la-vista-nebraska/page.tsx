import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in La Vista, NE - Get Free Installation & Service",
  description: "Get professional vending machine services for your La Vista, Nebraska business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services La Vista, vending machines La Vista FL, vending operators La Vista, break room vending La Vista",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/la-vista-nebraska"
  },
  openGraph: {
    title: "Vending Machine Services in La Vista, NE - Get Free Installation & Service",
    description: "Get professional vending machine services for your La Vista, Nebraska business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/la-vista-nebraska",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in La Vista, NE - Get Free Installation & Service",
    description: "Get professional vending machine services for your La Vista, Nebraska business."
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

export default function LaVistaNebraskaServicesPage() {
  return <PageClient />
}
