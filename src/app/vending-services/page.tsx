import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services Directory - Find Service Providers Across All States",
  description: "Comprehensive directory of professional vending machine service providers across all 50 states. Connect with qualified vending operators for your business location.",
  keywords: "vending machine services, vending operators, vending service providers, vending machine installation, vending machine maintenance",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services"
  },
  openGraph: {
    title: "Vending Machine Services Directory - Find Service Providers Across All States",
    description: "Comprehensive directory of professional vending machine service providers across all 50 states. Connect with qualified vending operators for your business location.",
    url: "https://www.thevendinglocator.com/vending-services",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services Directory - Find Service Providers Across All States",
    description: "Comprehensive directory of professional vending machine service providers across all 50 states. Connect with qualified vending operators for your business location."
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

export default function Page() {
  return <PageClient />
}

