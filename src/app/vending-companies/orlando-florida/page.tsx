import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Orlando Florida's Best Vending Machine Companies | The Vending Locator",
  description: "Discover the top vending machine companies serving Orlando, Florida. Find reliable vendors, compare services, and connect with professional operators for your business location.",
  keywords: "vending machine companies Orlando, Orlando vending services, vending companies Florida, vending machine operators Orlando",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-companies/orlando-florida"
  },
  openGraph: {
    title: "Orlando Florida's Best Vending Machine Companies",
    description: "Discover the top vending machine companies serving Orlando, Florida. Find reliable vendors and connect with professional operators.",
    url: "https://www.thevendinglocator.com/vending-companies/orlando-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Orlando Florida's Best Vending Machine Companies",
    description: "Discover the top vending machine companies serving Orlando, Florida."
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

export default function OrlandoFloridaVendingCompaniesPage() {
  return <PageClient />
}
