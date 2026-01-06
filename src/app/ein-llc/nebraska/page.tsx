import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "File EIN & LLC in Nebraska - $175 Complete Filing Service | The Vending Locator",
  description: "File your EIN and form your LLC in Nebraska with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Nebraska.",
  keywords: "file LLC Nebraska, form LLC Nebraska, EIN Nebraska, Nebraska LLC filing, Nebraska business formation, file LLC online Nebraska, Nebraska LLC service, get EIN Nebraska, Nebraska Secretary of State LLC, Nebraska LLC cost",
  alternates: {
    canonical: "https://www.thevendinglocator.com/ein-llc/nebraska"
  },
  openGraph: {
    title: "File EIN & LLC in Nebraska - $175 Complete Filing Service | The Vending Locator",
    description: "File your EIN and form your LLC in Nebraska with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Nebraska.",
    url: "https://www.thevendinglocator.com/ein-llc/nebraska",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "File EIN & LLC in Nebraska - $175 Complete Filing Service",
    description: "File your EIN and form your LLC in Nebraska. State filing fee: $125 + $50 service fee = $175 total. Fast, secure business formation."
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

export default function NebraskaEinLLCPage() {
  return <PageClient />
}

