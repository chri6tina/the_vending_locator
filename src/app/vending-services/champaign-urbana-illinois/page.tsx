import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Champaign-Urbana, IL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Champaign-Urbana, Illinois business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Champaign-Urbana, vending machines Champaign-Urbana IL, vending operators Champaign-Urbana, break room vending Champaign-Urbana",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/champaign-urbana-illinois"
  },
  openGraph: {
    title: "Vending Machine Services in Champaign-Urbana, IL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Champaign-Urbana, Illinois business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/champaign-urbana-illinois",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Champaign-Urbana, IL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Champaign-Urbana, Illinois business."
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

export default function ChampaignUrbanaIllinoisServicesPage() {
  return <PageClient />
}
