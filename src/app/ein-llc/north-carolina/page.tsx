import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "File EIN & LLC in North Carolina - $175 Complete Filing Service | The Vending Locator",
  description: "File your EIN and form your LLC in North Carolina with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in North Carolina.",
  keywords: "file LLC North Carolina, form LLC North Carolina, EIN North Carolina, North Carolina LLC filing, North Carolina business formation, file LLC online North Carolina, North Carolina LLC service, get EIN North Carolina, North Carolina Secretary of State LLC, North Carolina LLC cost",
  alternates: {
    canonical: "https://www.thevendinglocator.com/ein-llc/north-carolina"
  },
  openGraph: {
    title: "File EIN & LLC in North Carolina - $175 Complete Filing Service | The Vending Locator",
    description: "File your EIN and form your LLC in North Carolina with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in North Carolina.",
    url: "https://www.thevendinglocator.com/ein-llc/north-carolina",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "File EIN & LLC in North Carolina - $175 Complete Filing Service",
    description: "File your EIN and form your LLC in North Carolina. State filing fee: $125 + $50 service fee = $175 total. Fast, secure business formation."
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

export default function NorthCarolinaEinLLCPage() {
  return <PageClient />
}

