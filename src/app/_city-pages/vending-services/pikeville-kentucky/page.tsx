import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Pikeville, KY - Get Free Installation & Service",
  description: "Get professional vending machine services for your Pikeville, Kentucky business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Pikeville, vending machines Pikeville FL, vending operators Pikeville, break room vending Pikeville",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/pikeville-kentucky"
  },
  openGraph: {
    title: "Vending Machine Services in Pikeville, KY - Get Free Installation & Service",
    description: "Get professional vending machine services for your Pikeville, Kentucky business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/pikeville-kentucky",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Pikeville, KY - Get Free Installation & Service",
    description: "Get professional vending machine services for your Pikeville, Kentucky business."
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

export default function PikevilleKentuckyServicesPage() {
  return <PageClient />
}
