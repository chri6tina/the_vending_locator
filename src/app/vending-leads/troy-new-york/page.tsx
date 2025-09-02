import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Locations in Troy, New York - Find Qualified Businesses",
  description: "Get pre-qualified vending machine locations in Troy, New York's technology and educational hub. Access verified businesses with detailed contact information and placement opportunities.",
  keywords: "vending machine locations Troy New York, vending leads Troy, vending opportunities Troy NY, vending business Troy",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-leads/troy-new-york"
  },
  openGraph: {
    title: "Vending Machine Locations in Troy, New York - Find Qualified Businesses",
    description: "Get pre-qualified vending machine locations in Troy, New York's technology and educational hub. Access verified businesses with detailed contact information and placement opportunities.",
    url: "https://www.thevendinglocator.com/vending-leads/troy-new-york",
    siteName: "The Vending Locator",
    images: [
      {
        url: "https://www.thevendinglocator.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vending Machine Locations in Troy, New York"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Locations in Troy, New York - Find Qualified Businesses",
    description: "Get pre-qualified vending machine locations in Troy, New York's technology and educational hub. Access verified businesses with detailed contact information and placement opportunities.",
    images: ["https://www.thevendinglocator.com/og-image.jpg"]
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

export default function Page() {
  return <PageClient />
}
