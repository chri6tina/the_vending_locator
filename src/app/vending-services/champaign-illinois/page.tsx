import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Champaign, IL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Champaign, Illinois business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Champaign, vending machines Champaign IL, vending operators Champaign, break room vending Champaign",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/champaign-illinois"
  },
  openGraph: {
    title: "Vending Machine Services in Champaign, IL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Champaign, Illinois business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/champaign-illinois",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Champaign, IL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Champaign, Illinois business."
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

export default function ChampaignIllinoisServicesPage() {
  return <PageClient />
}
