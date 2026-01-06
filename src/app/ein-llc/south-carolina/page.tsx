import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "File EIN & LLC in South Carolina - $175 Complete Filing Service | The Vending Locator",
  description: "File your EIN and form your LLC in South Carolina with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in South Carolina.",
  keywords: "file LLC South Carolina, form LLC South Carolina, EIN South Carolina, South Carolina LLC filing, South Carolina business formation, file LLC online South Carolina, South Carolina LLC service, get EIN South Carolina, South Carolina Secretary of State LLC, South Carolina LLC cost",
  alternates: {
    canonical: "https://www.thevendinglocator.com/ein-llc/south-carolina"
  },
  openGraph: {
    title: "File EIN & LLC in South Carolina - $175 Complete Filing Service | The Vending Locator",
    description: "File your EIN and form your LLC in South Carolina with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in South Carolina.",
    url: "https://www.thevendinglocator.com/ein-llc/south-carolina",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "File EIN & LLC in South Carolina - $175 Complete Filing Service",
    description: "File your EIN and form your LLC in South Carolina. State filing fee: $125 + $50 service fee = $175 total. Fast, secure business formation."
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

export default function SouthCarolinaEinLLCPage() {
  return <PageClient />
}

