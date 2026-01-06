import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "File EIN & LLC in Connecticut - $175 Complete Filing Service | The Vending Locator",
  description: "File your EIN and form your LLC in Connecticut with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Connecticut.",
  keywords: "file LLC Connecticut, form LLC Connecticut, EIN Connecticut, Connecticut LLC filing, Connecticut business formation, file LLC online Connecticut, Connecticut LLC service, get EIN Connecticut, Connecticut Secretary of State LLC, Connecticut LLC cost",
  alternates: {
    canonical: "https://www.thevendinglocator.com/ein-llc/connecticut"
  },
  openGraph: {
    title: "File EIN & LLC in Connecticut - $175 Complete Filing Service | The Vending Locator",
    description: "File your EIN and form your LLC in Connecticut with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Connecticut.",
    url: "https://www.thevendinglocator.com/ein-llc/connecticut",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "File EIN & LLC in Connecticut - $175 Complete Filing Service",
    description: "File your EIN and form your LLC in Connecticut. State filing fee: $125 + $50 service fee = $175 total. Fast, secure business formation."
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

export default function ConnecticutEinLLCPage() {
  return <PageClient />
}

