import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Battle Creek, MI - Get Free Installation & Service",
  description: "Get professional vending machine services for your Battle Creek, Michigan business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Battle Creek, vending machines Battle Creek FL, vending operators Battle Creek, break room vending Battle Creek",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/battle-creek"
  },
  openGraph: {
    title: "Vending Machine Services in Battle Creek, MI - Get Free Installation & Service",
    description: "Get professional vending machine services for your Battle Creek, Michigan business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/battle-creek",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Battle Creek, MI - Get Free Installation & Service",
    description: "Get professional vending machine services for your Battle Creek, Michigan business."
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

export default function BattleCreekMichiganServicesPage() {
  return <PageClient />
}
