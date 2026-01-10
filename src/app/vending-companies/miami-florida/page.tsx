import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Miami Florida's Best Vending Machine Companies | The Vending Locator",
  description: "Discover the top vending machine companies serving Miami, Florida. Find reliable vendors, compare services, and connect with professional operators for your business location.",
  keywords: "vending machine companies Miami, Miami vending services, vending companies Florida, vending machine operators Miami",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-companies/miami-florida"
  },
  openGraph: {
    title: "Miami Florida's Best Vending Machine Companies",
    description: "Discover the top vending machine companies serving Miami, Florida. Find reliable vendors and connect with professional operators.",
    url: "https://www.thevendinglocator.com/vending-companies/miami-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Miami Florida's Best Vending Machine Companies",
    description: "Discover the top vending machine companies serving Miami, Florida."
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

export default function MiamiFloridaVendingCompaniesPage() {
  return <PageClient />
}
