import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "File EIN & LLC in New Hampshire - $175 Complete Filing Service | The Vending Locator",
  description: "File your EIN and form your LLC in New Hampshire with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in New Hampshire.",
  keywords: "file LLC New Hampshire, form LLC New Hampshire, EIN New Hampshire, New Hampshire LLC filing, New Hampshire business formation, file LLC online New Hampshire, New Hampshire LLC service, get EIN New Hampshire, New Hampshire Secretary of State LLC, New Hampshire LLC cost",
  alternates: {
    canonical: "https://www.thevendinglocator.com/ein-llc/new-hampshire"
  },
  openGraph: {
    title: "File EIN & LLC in New Hampshire - $175 Complete Filing Service | The Vending Locator",
    description: "File your EIN and form your LLC in New Hampshire with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in New Hampshire.",
    url: "https://www.thevendinglocator.com/ein-llc/new-hampshire",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "File EIN & LLC in New Hampshire - $175 Complete Filing Service",
    description: "File your EIN and form your LLC in New Hampshire. State filing fee: $125 + $50 service fee = $175 total. Fast, secure business formation."
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

export default function New HampshireEinLLCPage() {
  return <PageClient />
}

