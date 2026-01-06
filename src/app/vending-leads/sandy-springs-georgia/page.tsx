import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Locations in Sandy Springs, Georgia - Find Qualified Businesses",
  description: "Get pre-qualified vending machine locations in Sandy Springs, Georgia's affluent business district. Access verified businesses with detailed contact information and placement opportunities.",
  keywords: "vending machine locations Sandy Springs Georgia, vending leads Sandy Springs, vending opportunities Sandy Springs GA, vending business Sandy Springs",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-leads/sandy-springs-georgia"
  },
  openGraph: {
    title: "Vending Machine Locations in Sandy Springs, Georgia - Find Qualified Businesses",
    description: "Get pre-qualified vending machine locations in Sandy Springs, Georgia's affluent business district. Access verified businesses with detailed contact information and placement opportunities.",
    url: "https://www.thevendinglocator.com/vending-leads/sandy-springs-georgia",
    siteName: "The Vending Locator",
    images: [
      {
        url: "https://www.thevendinglocator.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vending Machine Locations in Sandy Springs, Georgia"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Locations in Sandy Springs, Georgia - Find Qualified Businesses",
    description: "Get pre-qualified vending machine locations in Sandy Springs, Georgia's affluent business district. Access verified businesses with detailed contact information and placement opportunities.",
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

// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Generate on-demand to reduce build memory usage
export default function Page() {
  return <PageClient />
}
