import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Saint Joseph, MO - Get Free Installation & Service",
  description: "Get professional vending machine services for your Saint Joseph, Missouri business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Saint Joseph, vending machines Saint Joseph FL, vending operators Saint Joseph, break room vending Saint Joseph",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/saint-joseph-missouri"
  },
  openGraph: {
    title: "Vending Machine Services in Saint Joseph, MO - Get Free Installation & Service",
    description: "Get professional vending machine services for your Saint Joseph, Missouri business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/saint-joseph-missouri",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Saint Joseph, MO - Get Free Installation & Service",
    description: "Get professional vending machine services for your Saint Joseph, Missouri business."
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

export default function SaintJosephMissouriServicesPage() {
  return <PageClient />
}
