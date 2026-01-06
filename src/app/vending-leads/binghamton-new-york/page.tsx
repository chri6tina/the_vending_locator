import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Locations in Binghamton, New York - Find Qualified Businesses",
  description: "Get pre-qualified vending machine locations in Binghamton, New York's educational and technology hub. Access verified businesses with detailed contact information and placement opportunities.",
  keywords: "vending machine locations Binghamton New York, vending leads Binghamton, vending opportunities Binghamton NY, vending business Binghamton",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-leads/binghamton-new-york"
  },
  openGraph: {
    title: "Vending Machine Locations in Binghamton, New York - Find Qualified Businesses",
    description: "Get pre-qualified vending machine locations in Binghamton, New York's educational and technology hub. Access verified businesses with detailed contact information and placement opportunities.",
    url: "https://www.thevendinglocator.com/vending-leads/binghamton-new-york",
    siteName: "The Vending Locator",
    images: [
      {
        url: "https://www.thevendinglocator.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vending Machine Locations in Binghamton, New York"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Locations in Binghamton, New York - Find Qualified Businesses",
    description: "Get pre-qualified vending machine locations in Binghamton, New York's educational and technology hub. Access verified businesses with detailed contact information and placement opportunities.",
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
export default function Page() {
  return <PageClient />
}
