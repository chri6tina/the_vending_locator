import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "File EIN & LLC in Indiana - $175 Complete Filing Service | The Vending Locator",
  description: "File your EIN and form your LLC in Indiana with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Indiana.",
  keywords: "file LLC Indiana, form LLC Indiana, EIN Indiana, Indiana LLC filing, Indiana business formation, file LLC online Indiana, Indiana LLC service, get EIN Indiana, Indiana Secretary of State LLC, Indiana LLC cost",
  alternates: {
    canonical: "https://www.thevendinglocator.com/ein-llc/indiana"
  },
  openGraph: {
    title: "File EIN & LLC in Indiana - $175 Complete Filing Service | The Vending Locator",
    description: "File your EIN and form your LLC in Indiana with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Indiana.",
    url: "https://www.thevendinglocator.com/ein-llc/indiana",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "File EIN & LLC in Indiana - $175 Complete Filing Service",
    description: "File your EIN and form your LLC in Indiana. State filing fee: $125 + $50 service fee = $175 total. Fast, secure business formation."
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

export default function IndianaEinLLCPage() {
  return <PageClient />
}

