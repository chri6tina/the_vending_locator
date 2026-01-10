import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Houston Texas's Best Vending Machine Companies | The Vending Locator",
  description: "Discover the top vending machine companies serving Houston, Texas. Find reliable vendors, compare services, and connect with professional operators for your business location.",
  keywords: "vending machine companies Houston, Houston vending services, vending companies Texas, vending machine operators Houston",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-companies/houston-texas"
  },
  openGraph: {
    title: "Houston Texas's Best Vending Machine Companies",
    description: "Discover the top vending machine companies serving Houston, Texas. Find reliable vendors and connect with professional operators.",
    url: "https://www.thevendinglocator.com/vending-companies/houston-texas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Houston Texas's Best Vending Machine Companies",
    description: "Discover the top vending machine companies serving Houston, Texas."
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

export default function HoustonTexasVendingCompaniesPage() {
  return <PageClient />
}
