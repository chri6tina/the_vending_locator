import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in New Iberia, LA - Get Free Installation & Service",
  description: "Get professional vending machine services for your New Iberia, Louisiana business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services New Iberia, vending machines New Iberia FL, vending operators New Iberia, break room vending New Iberia",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/new-iberia-louisiana"
  },
  openGraph: {
    title: "Vending Machine Services in New Iberia, LA - Get Free Installation & Service",
    description: "Get professional vending machine services for your New Iberia, Louisiana business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/new-iberia-louisiana",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in New Iberia, LA - Get Free Installation & Service",
    description: "Get professional vending machine services for your New Iberia, Louisiana business."
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

export default function NewIberiaLouisianaServicesPage() {
  return <PageClient />
}
