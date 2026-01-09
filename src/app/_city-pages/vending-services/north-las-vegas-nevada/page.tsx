import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in North Las Vegas, NV - Get Free Installation & Service",
  description: "Get professional vending machine services for your North Las Vegas, Nevada business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services North Las Vegas, vending machines North Las Vegas NV, vending operators North Las Vegas, break room vending North Las Vegas",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/north-las-vegas-nevada"
  },
  openGraph: {
    title: "Vending Machine Services in North Las Vegas, NV - Get Free Installation & Service",
    description: "Get professional vending machine services for your North Las Vegas, Nevada business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/north-las-vegas-nevada",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in North Las Vegas, NV - Get Free Installation & Service",
    description: "Get professional vending machine services for your North Las Vegas, Nevada business."
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

export default function NorthLasVegasNevadaServicesPage() {
  return <PageClient />
}
