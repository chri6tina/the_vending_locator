import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Villa Rica, GA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Villa Rica, Georgia business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Villa Rica, vending machines Villa Rica FL, vending operators Villa Rica, break room vending Villa Rica",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/villa-rica-georgia"
  },
  openGraph: {
    title: "Vending Machine Services in Villa Rica, GA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Villa Rica, Georgia business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/villa-rica-georgia",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Villa Rica, GA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Villa Rica, Georgia business."
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

export default function VillaRicaGeorgiaServicesPage() {
  return <PageClient />
}
