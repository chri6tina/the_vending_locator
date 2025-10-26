import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Owensboro, KY - Get Free Installation & Service",
  description: "Get professional vending machine services for your Owensboro, Kentucky business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Owensboro, vending machines Owensboro KY, vending operators Owensboro, break room vending Owensboro",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/owensboro-kentucky"
  },
  openGraph: {
    title: "Vending Machine Services in Owensboro, KY - Get Free Installation & Service",
    description: "Get professional vending machine services for your Owensboro, Kentucky business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/owensboro-kentucky",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Owensboro, KY - Get Free Installation & Service",
    description: "Get professional vending machine services for your Owensboro, Kentucky business."
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

export default function OwensboroKentuckyServicesPage() {
  return <PageClient />
}
