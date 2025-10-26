import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Tuscaloosa, AL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Tuscaloosa, Alabama business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Tuscaloosa, vending machines Tuscaloosa AL, vending operators Tuscaloosa, break room vending Tuscaloosa",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/tuscaloosa-alabama"
  },
  openGraph: {
    title: "Vending Machine Services in Tuscaloosa, AL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Tuscaloosa, Alabama business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/tuscaloosa-alabama",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Tuscaloosa, AL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Tuscaloosa, Alabama business."
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

export default function TuscaloosaAlabamaServicesPage() {
  return <PageClient />
}
