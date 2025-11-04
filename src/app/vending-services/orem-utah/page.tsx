import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Orem, UT - Get Free Installation & Service",
  description: "Get professional vending machine services for your Orem, Utah business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Orem, vending machines Orem UT, vending operators Orem, break room vending Orem",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/orem-utah"
  },
  openGraph: {
    title: "Vending Machine Services in Orem, UT - Get Free Installation & Service",
    description: "Get professional vending machine services for your Orem, Utah business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/orem-utah",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Orem, UT - Get Free Installation & Service",
    description: "Get professional vending machine services for your Orem, Utah business."
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

export default function OremUtahServicesPage() {
  return <PageClient />
}
