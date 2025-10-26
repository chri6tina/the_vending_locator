import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Glen Burnie, MD - Get Free Installation & Service",
  description: "Get professional vending machine services for your Glen Burnie, Maryland business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Glen Burnie, vending machines Glen Burnie MD, vending operators Glen Burnie, break room vending Glen Burnie",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/glen-burnie-maryland"
  },
  openGraph: {
    title: "Vending Machine Services in Glen Burnie, MD - Get Free Installation & Service",
    description: "Get professional vending machine services for your Glen Burnie, Maryland business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/glen-burnie-maryland",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Glen Burnie, MD - Get Free Installation & Service",
    description: "Get professional vending machine services for your Glen Burnie, Maryland business."
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

export default function GlenBurnieMarylandServicesPage() {
  return <PageClient />
}
