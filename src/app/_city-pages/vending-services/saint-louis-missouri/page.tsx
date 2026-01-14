import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Saint Louis, MO - Get Free Installation & Service",
  description: "Get professional vending machine services for your Saint Louis, Missouri business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Saint Louis, vending machines Saint Louis FL, vending operators Saint Louis, break room vending Saint Louis",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/saint-louis-missouri"
  },
  openGraph: {
    title: "Vending Machine Services in Saint Louis, MO - Get Free Installation & Service",
    description: "Get professional vending machine services for your Saint Louis, Missouri business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/saint-louis-missouri",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Saint Louis, MO - Get Free Installation & Service",
    description: "Get professional vending machine services for your Saint Louis, Missouri business."
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

export default function SaintLouisMissouriServicesPage() {
  return <PageClient />
}
