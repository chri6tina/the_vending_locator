import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Lander, WY - Get Free Installation & Service",
  description: "Get professional vending machine services for your Lander, Wyoming business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Lander, vending machines Lander FL, vending operators Lander, break room vending Lander",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/lander-wyoming"
  },
  openGraph: {
    title: "Vending Machine Services in Lander, WY - Get Free Installation & Service",
    description: "Get professional vending machine services for your Lander, Wyoming business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/lander-wyoming",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Lander, WY - Get Free Installation & Service",
    description: "Get professional vending machine services for your Lander, Wyoming business."
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

export default function LanderWyomingServicesPage() {
  return <PageClient />
}
