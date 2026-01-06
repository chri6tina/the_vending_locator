import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "File EIN & LLC in Maryland - $175 Complete Filing Service | The Vending Locator",
  description: "File your EIN and form your LLC in Maryland with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Maryland.",
  keywords: "file LLC Maryland, form LLC Maryland, EIN Maryland, Maryland LLC filing, Maryland business formation, file LLC online Maryland, Maryland LLC service, get EIN Maryland, Maryland Secretary of State LLC, Maryland LLC cost",
  alternates: {
    canonical: "https://www.thevendinglocator.com/ein-llc/maryland"
  },
  openGraph: {
    title: "File EIN & LLC in Maryland - $175 Complete Filing Service | The Vending Locator",
    description: "File your EIN and form your LLC in Maryland with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Maryland.",
    url: "https://www.thevendinglocator.com/ein-llc/maryland",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "File EIN & LLC in Maryland - $175 Complete Filing Service",
    description: "File your EIN and form your LLC in Maryland. State filing fee: $125 + $50 service fee = $175 total. Fast, secure business formation."
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

export default function MarylandEinLLCPage() {
  return <PageClient />
}

