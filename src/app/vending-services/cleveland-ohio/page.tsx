import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Cleveland, OH - Get Free Installation & Service",
  description: "Get professional vending machine services for your Cleveland, Ohio business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Cleveland, vending machines Cleveland OH, vending operators Cleveland, break room vending Cleveland",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/cleveland-ohio"
  },
  openGraph: {
    title: "Vending Machine Services in Cleveland, OH - Get Free Installation & Service",
    description: "Get professional vending machine services for your Cleveland, Ohio business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/cleveland-ohio",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Cleveland, OH - Get Free Installation & Service",
    description: "Get professional vending machine services for your Cleveland, Ohio business."
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

export default function ClevelandOhioServicesPage() {
  return <PageClient />
}
