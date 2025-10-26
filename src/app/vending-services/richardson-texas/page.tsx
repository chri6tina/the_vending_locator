import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Richardson, TX - Get Free Installation & Service",
  description: "Get professional vending machine services for your Richardson, Texas business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Richardson, vending machines Richardson TX, vending operators Richardson, break room vending Richardson",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/richardson-texas"
  },
  openGraph: {
    title: "Vending Machine Services in Richardson, TX - Get Free Installation & Service",
    description: "Get professional vending machine services for your Richardson, Texas business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/richardson-texas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Richardson, TX - Get Free Installation & Service",
    description: "Get professional vending machine services for your Richardson, Texas business."
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

export default function RichardsonTexasServicesPage() {
  return <PageClient />
}
