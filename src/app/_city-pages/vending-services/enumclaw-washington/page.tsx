import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Enumclaw, WA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Enumclaw, Washington business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Enumclaw, vending machines Enumclaw FL, vending operators Enumclaw, break room vending Enumclaw",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/enumclaw-washington"
  },
  openGraph: {
    title: "Vending Machine Services in Enumclaw, WA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Enumclaw, Washington business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/enumclaw-washington",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Enumclaw, WA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Enumclaw, Washington business."
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

export default function EnumclawWashingtonServicesPage() {
  return <PageClient />
}
