import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Website Rental - Professional Vending Business Websites | The Vending Locator",
  description: "Get a professional vending business website without building or managing it yourself. We build and host your site—you rent it monthly for a professional online presence that helps customers contact you.",
  keywords: "vending website rental, vending business website, vending operator website, vending website hosting, professional vending website, vending lead capture website",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-website-rental"
  },
  openGraph: {
    title: "Vending Website Rental - Professional Vending Business Websites | The Vending Locator",
    description: "Get a professional vending business website without building or managing it yourself. We build and host your site—you rent it monthly for a professional online presence.",
    url: "https://www.thevendinglocator.com/vending-website-rental",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Website Rental - Professional Vending Business Websites | The Vending Locator",
    description: "Get a professional vending business website without building or managing it yourself. We build and host your site—you rent it monthly."
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

export default function VendingWebsiteRentalPage() {
  return <PageClient />
}
