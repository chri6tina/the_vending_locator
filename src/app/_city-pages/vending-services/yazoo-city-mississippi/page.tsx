import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Yazoo City, MS - Get Free Installation & Service",
  description: "Get professional vending machine services for your Yazoo City, Mississippi business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Yazoo City, vending machines Yazoo City FL, vending operators Yazoo City, break room vending Yazoo City",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/yazoo-city-mississippi"
  },
  openGraph: {
    title: "Vending Machine Services in Yazoo City, MS - Get Free Installation & Service",
    description: "Get professional vending machine services for your Yazoo City, Mississippi business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/yazoo-city-mississippi",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Yazoo City, MS - Get Free Installation & Service",
    description: "Get professional vending machine services for your Yazoo City, Mississippi business."
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

export default function YazooCityMississippiServicesPage() {
  return <PageClient />
}
