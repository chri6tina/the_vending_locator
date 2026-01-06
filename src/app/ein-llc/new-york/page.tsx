import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "File EIN & LLC in New York - $175 Complete Filing Service | The Vending Locator",
  description: "File your EIN and form your LLC in New York with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in New York.",
  keywords: "file LLC New York, form LLC New York, EIN New York, New York LLC filing, New York business formation, file LLC online New York, New York LLC service, get EIN New York, New York Secretary of State LLC, New York LLC cost",
  alternates: {
    canonical: "https://www.thevendinglocator.com/ein-llc/new-york"
  },
  openGraph: {
    title: "File EIN & LLC in New York - $175 Complete Filing Service | The Vending Locator",
    description: "File your EIN and form your LLC in New York with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in New York.",
    url: "https://www.thevendinglocator.com/ein-llc/new-york",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "File EIN & LLC in New York - $175 Complete Filing Service",
    description: "File your EIN and form your LLC in New York. State filing fee: $125 + $50 service fee = $175 total. Fast, secure business formation."
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

export default function NewYorkEinLLCPage() {
  return <PageClient />
}

