import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Locations in Rochester, New York - Find Qualified Businesses",
  description: "Get pre-qualified vending machine locations in Rochester, New York's manufacturing and tech hub. Access verified businesses with detailed contact information and placement opportunities.",
  keywords: "vending machine locations Rochester New York, vending leads Rochester, vending opportunities Rochester NY, vending business Rochester",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-leads/rochester-new-york"
  },
  openGraph: {
    title: "Vending Machine Locations in Rochester, New York - Find Qualified Businesses",
    description: "Get pre-qualified vending machine locations in Rochester, New York's manufacturing and tech hub. Access verified businesses with detailed contact information and placement opportunities.",
    url: "https://www.thevendinglocator.com/vending-leads/rochester-new-york",
    siteName: "The Vending Locator",
    images: [
      {
        url: "https://www.thevendinglocator.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vending Machine Locations in Rochester, New York"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Locations in Rochester, New York - Find Qualified Businesses",
    description: "Get pre-qualified vending machine locations in Rochester, New York's manufacturing and tech hub. Access verified businesses with detailed contact information and placement opportunities.",
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
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function Page() {
  return <PageClient />
}
