import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in San Juan Capistrano, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your San Juan Capistrano, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services San Juan Capistrano, vending machines San Juan Capistrano FL, vending operators San Juan Capistrano, break room vending San Juan Capistrano",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/san-juan-capistrano-california"
  },
  openGraph: {
    title: "Vending Machine Services in San Juan Capistrano, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your San Juan Capistrano, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/san-juan-capistrano-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in San Juan Capistrano, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your San Juan Capistrano, California business."
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

export default function SanJuanCapistranoCaliforniaServicesPage() {
  return <PageClient />
}
