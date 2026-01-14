import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Chaska, MN - Get Free Installation & Service",
  description: "Get professional vending machine services for your Chaska, Minnesota business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Chaska, vending machines Chaska FL, vending operators Chaska, break room vending Chaska",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/chaska-minnesota"
  },
  openGraph: {
    title: "Vending Machine Services in Chaska, MN - Get Free Installation & Service",
    description: "Get professional vending machine services for your Chaska, Minnesota business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/chaska-minnesota",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Chaska, MN - Get Free Installation & Service",
    description: "Get professional vending machine services for your Chaska, Minnesota business."
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

export default function ChaskaMinnesotaServicesPage() {
  return <PageClient />
}
