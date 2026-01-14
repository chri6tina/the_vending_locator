import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Prescott Valley, AZ - Get Free Installation & Service",
  description: "Get professional vending machine services for your Prescott Valley, Arizona business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Prescott Valley, vending machines Prescott Valley FL, vending operators Prescott Valley, break room vending Prescott Valley",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/prescott-valley-arizona"
  },
  openGraph: {
    title: "Vending Machine Services in Prescott Valley, AZ - Get Free Installation & Service",
    description: "Get professional vending machine services for your Prescott Valley, Arizona business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/prescott-valley-arizona",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Prescott Valley, AZ - Get Free Installation & Service",
    description: "Get professional vending machine services for your Prescott Valley, Arizona business."
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

export default function PrescottValleyArizonaServicesPage() {
  return <PageClient />
}
