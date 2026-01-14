import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Thief River Falls, MN - Get Free Installation & Service",
  description: "Get professional vending machine services for your Thief River Falls, Minnesota business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Thief River Falls, vending machines Thief River Falls FL, vending operators Thief River Falls, break room vending Thief River Falls",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/thief-river-falls-minnesota"
  },
  openGraph: {
    title: "Vending Machine Services in Thief River Falls, MN - Get Free Installation & Service",
    description: "Get professional vending machine services for your Thief River Falls, Minnesota business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/thief-river-falls-minnesota",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Thief River Falls, MN - Get Free Installation & Service",
    description: "Get professional vending machine services for your Thief River Falls, Minnesota business."
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

export default function ThiefRiverFallsMinnesotaServicesPage() {
  return <PageClient />
}
