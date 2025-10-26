import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Bethlehem, PA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Bethlehem, Pennsylvania business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Bethlehem, vending machines Bethlehem PA, vending operators Bethlehem, break room vending Bethlehem",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/bethlehem-pennsylvania"
  },
  openGraph: {
    title: "Vending Machine Services in Bethlehem, PA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Bethlehem, Pennsylvania business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/bethlehem-pennsylvania",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Bethlehem, PA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Bethlehem, Pennsylvania business."
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

export default function BethlehemPennsylvaniaServicesPage() {
  return <PageClient />
}
