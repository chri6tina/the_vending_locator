import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Locations in Schenectady, New York - Find Qualified Businesses",
  description: "Get pre-qualified vending machine locations in Schenectady, New York's technology and manufacturing hub. Access verified businesses with detailed contact information and placement opportunities.",
  keywords: "vending machine locations Schenectady New York, vending leads Schenectady, vending opportunities Schenectady NY, vending business Schenectady",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-leads/schenectady-new-york"
  },
  openGraph: {
    title: "Vending Machine Locations in Schenectady, New York - Find Qualified Businesses",
    description: "Get pre-qualified vending machine locations in Schenectady, New York's technology and manufacturing hub. Access verified businesses with detailed contact information and placement opportunities.",
    url: "https://www.thevendinglocator.com/vending-leads/schenectady-new-york",
    siteName: "The Vending Locator",
    images: [
      {
        url: "https://www.thevendinglocator.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vending Machine Locations in Schenectady, New York"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Locations in Schenectady, New York - Find Qualified Businesses",
    description: "Get pre-qualified vending machine locations in Schenectady, New York's technology and manufacturing hub. Access verified businesses with detailed contact information and placement opportunities.",
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

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <PageClient />
}
