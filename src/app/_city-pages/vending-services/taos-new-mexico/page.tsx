import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Taos, NM - Get Free Installation & Service",
  description: "Get professional vending machine services for your Taos, New Mexico business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Taos, vending machines Taos FL, vending operators Taos, break room vending Taos",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/taos-new-mexico"
  },
  openGraph: {
    title: "Vending Machine Services in Taos, NM - Get Free Installation & Service",
    description: "Get professional vending machine services for your Taos, New Mexico business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/taos-new-mexico",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Taos, NM - Get Free Installation & Service",
    description: "Get professional vending machine services for your Taos, New Mexico business."
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

export default function TaosNewMexicoServicesPage() {
  return <PageClient />
}
