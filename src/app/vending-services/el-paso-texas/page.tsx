import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in El Paso, TX - Get Free Installation & Service",
  description: "Get professional vending machine services for your El Paso, Texas business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services El Paso, vending machines El Paso TX, vending operators El Paso, break room vending El Paso",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/el-paso-texas"
  },
  openGraph: {
    title: "Vending Machine Services in El Paso, TX - Get Free Installation & Service",
    description: "Get professional vending machine services for your El Paso, Texas business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/el-paso-texas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in El Paso, TX - Get Free Installation & Service",
    description: "Get professional vending machine services for your El Paso, Texas business."
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

export default function ElPasoTexasServicesPage() {
  return <PageClient />
}
