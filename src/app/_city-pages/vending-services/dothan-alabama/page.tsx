import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Dothan, AL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Dothan, Alabama business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Dothan, vending machines Dothan AL, vending operators Dothan, break room vending Dothan",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/dothan-alabama"
  },
  openGraph: {
    title: "Vending Machine Services in Dothan, AL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Dothan, Alabama business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/dothan-alabama",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Dothan, AL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Dothan, Alabama business."
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

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function DothanAlabamaServicesPage() {
  return <PageClient />
}
