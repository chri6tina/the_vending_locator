import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Locations in Warner Robins, Georgia - Find Qualified Businesses",
  description: "Get pre-qualified vending machine locations in Warner Robins, Georgia's military and business community. Access verified businesses with detailed contact information and placement opportunities.",
  keywords: "vending machine locations Warner Robins Georgia, vending leads Warner Robins, vending opportunities Warner Robins GA, vending business Warner Robins",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-leads/warner-robins-georgia"
  },
  openGraph: {
    title: "Vending Machine Locations in Warner Robins, Georgia - Find Qualified Businesses",
    description: "Get pre-qualified vending machine locations in Warner Robins, Georgia's military and business community. Access verified businesses with detailed contact information and placement opportunities.",
    url: "https://www.thevendinglocator.com/vending-leads/warner-robins-georgia",
    siteName: "The Vending Locator",
    images: [
      {
        url: "https://www.thevendinglocator.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vending Machine Locations in Warner Robins, Georgia"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Locations in Warner Robins, Georgia - Find Qualified Businesses",
    description: "Get pre-qualified vending machine locations in Warner Robins, Georgia's military and business community. Access verified businesses with detailed contact information and placement opportunities.",
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
