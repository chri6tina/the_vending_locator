import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Bossier City, LA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Bossier City, Louisiana business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Bossier City, vending machines Bossier City LA, vending operators Bossier City, break room vending Bossier City",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/bossier-city-louisiana"
  },
  openGraph: {
    title: "Vending Machine Services in Bossier City, LA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Bossier City, Louisiana business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/bossier-city-louisiana",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Bossier City, LA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Bossier City, Louisiana business."
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

export default function BossierCityLouisianaServicesPage() {
  return <PageClient />
}
