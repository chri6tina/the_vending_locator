import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Sulphur Springs, TX - Get Free Installation & Service",
  description: "Get professional vending machine services for your Sulphur Springs, Texas business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Sulphur Springs, vending machines Sulphur Springs FL, vending operators Sulphur Springs, break room vending Sulphur Springs",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/sulphur-springs-texas"
  },
  openGraph: {
    title: "Vending Machine Services in Sulphur Springs, TX - Get Free Installation & Service",
    description: "Get professional vending machine services for your Sulphur Springs, Texas business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/sulphur-springs-texas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Sulphur Springs, TX - Get Free Installation & Service",
    description: "Get professional vending machine services for your Sulphur Springs, Texas business."
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

export default function SulphurSpringsTexasServicesPage() {
  return <PageClient />
}
