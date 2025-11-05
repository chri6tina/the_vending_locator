import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Bowling Green, KY - Get Free Installation & Service",
  description: "Get professional vending machine services for your Bowling Green, Kentucky business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Bowling Green, vending machines Bowling Green KY, vending operators Bowling Green, break room vending Bowling Green",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/bowling-green-kentucky"
  },
  openGraph: {
    title: "Vending Machine Services in Bowling Green, KY - Get Free Installation & Service",
    description: "Get professional vending machine services for your Bowling Green, Kentucky business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/bowling-green-kentucky",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Bowling Green, KY - Get Free Installation & Service",
    description: "Get professional vending machine services for your Bowling Green, Kentucky business."
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

export default function BowlingGreenKentuckyServicesPage() {
  return <PageClient />
}
