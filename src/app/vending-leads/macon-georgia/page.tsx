import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Locations in Macon, Georgia - Find Qualified Businesses",
  description: "Get pre-qualified vending machine locations in Macon, Georgia's central business hub. Access verified businesses with detailed contact information and placement opportunities.",
  keywords: "vending machine locations Macon Georgia, vending leads Macon, vending opportunities Macon GA, vending business Macon",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-leads/macon-georgia"
  },
  openGraph: {
    title: "Vending Machine Locations in Macon, Georgia - Find Qualified Businesses",
    description: "Get pre-qualified vending machine locations in Macon, Georgia's central business hub. Access verified businesses with detailed contact information and placement opportunities.",
    url: "https://www.thevendinglocator.com/vending-leads/macon-georgia",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Locations in Macon, Georgia - Find Qualified Businesses",
    description: "Get pre-qualified vending machine locations in Macon, Georgia's central business hub. Access verified businesses with detailed contact information and placement opportunities."
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
