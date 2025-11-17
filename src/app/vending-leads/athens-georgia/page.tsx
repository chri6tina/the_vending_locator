import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Locations in Athens, Georgia - Find Qualified Businesses",
  description: "Get pre-qualified vending machine locations in Athens, Georgia's university town with high student population. Access verified businesses with detailed contact information and placement opportunities.",
  keywords: "vending machine locations Athens Georgia, vending leads Athens, vending opportunities Athens GA, vending business Athens, university vending machines",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-leads/athens-georgia"
  },
  openGraph: {
    title: "Vending Machine Locations in Athens, Georgia - Find Qualified Businesses",
    description: "Get pre-qualified vending machine locations in Athens, Georgia's university town with high student population. Access verified businesses with detailed contact information and placement opportunities.",
    url: "https://www.thevendinglocator.com/vending-leads/athens-georgia",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Locations in Athens, Georgia - Find Qualified Businesses",
    description: "Get pre-qualified vending machine locations in Athens, Georgia's university town with high student population. Access verified businesses with detailed contact information and placement opportunities."
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
