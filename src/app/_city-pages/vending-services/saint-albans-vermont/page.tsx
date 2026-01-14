import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Saint Albans, VT - Get Free Installation & Service",
  description: "Get professional vending machine services for your Saint Albans, Vermont business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Saint Albans, vending machines Saint Albans FL, vending operators Saint Albans, break room vending Saint Albans",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/saint-albans-vermont"
  },
  openGraph: {
    title: "Vending Machine Services in Saint Albans, VT - Get Free Installation & Service",
    description: "Get professional vending machine services for your Saint Albans, Vermont business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/saint-albans-vermont",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Saint Albans, VT - Get Free Installation & Service",
    description: "Get professional vending machine services for your Saint Albans, Vermont business."
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

export default function SaintAlbansVermontServicesPage() {
  return <PageClient />
}
