import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in New Braunfels, TX - Get Free Installation & Service",
  description: "Get professional vending machine services for your New Braunfels, Texas business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services New Braunfels, vending machines New Braunfels FL, vending operators New Braunfels, break room vending New Braunfels",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/new-braunfels-texas"
  },
  openGraph: {
    title: "Vending Machine Services in New Braunfels, TX - Get Free Installation & Service",
    description: "Get professional vending machine services for your New Braunfels, Texas business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/new-braunfels-texas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in New Braunfels, TX - Get Free Installation & Service",
    description: "Get professional vending machine services for your New Braunfels, Texas business."
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

export default function NewBraunfelsTexasServicesPage() {
  return <PageClient />
}
