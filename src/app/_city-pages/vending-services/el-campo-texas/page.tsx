import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in El Campo, TX - Get Free Installation & Service",
  description: "Get professional vending machine services for your El Campo, Texas business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services El Campo, vending machines El Campo FL, vending operators El Campo, break room vending El Campo",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/el-campo-texas"
  },
  openGraph: {
    title: "Vending Machine Services in El Campo, TX - Get Free Installation & Service",
    description: "Get professional vending machine services for your El Campo, Texas business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/el-campo-texas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in El Campo, TX - Get Free Installation & Service",
    description: "Get professional vending machine services for your El Campo, Texas business."
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

export default function ElCampoTexasServicesPage() {
  return <PageClient />
}
