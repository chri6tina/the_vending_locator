import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Leads in Coon Rapids, Minnesota - The Vending Locator",
  description: "Get verified vending machine leads and locations throughout Coon Rapids, Minnesota. Find qualified businesses for vending machine placement.",
  keywords: "vending machines Coon Rapids, vending leads Coon Rapids, vending locations Coon Rapids, vending opportunities Coon Rapids",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-leads/coon-rapids-minnesota"
  },
  openGraph: {
    title: "Vending Machine Leads in Coon Rapids, Minnesota - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout Coon Rapids, Minnesota. Find qualified businesses for vending machine placement.",
    url: "https://www.thevendinglocator.com/vending-leads/coon-rapids-minnesota",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Leads in Coon Rapids, Minnesota - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout Coon Rapids, Minnesota. Find qualified businesses for vending machine placement."
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
