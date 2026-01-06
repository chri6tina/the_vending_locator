import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "File EIN & LLC in Rhode Island - $175 Complete Filing Service | The Vending Locator",
  description: "File your EIN and form your LLC in Rhode Island with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Rhode Island.",
  keywords: "file LLC Rhode Island, form LLC Rhode Island, EIN Rhode Island, Rhode Island LLC filing, Rhode Island business formation, file LLC online Rhode Island, Rhode Island LLC service, get EIN Rhode Island, Rhode Island Secretary of State LLC, Rhode Island LLC cost",
  alternates: {
    canonical: "https://www.thevendinglocator.com/ein-llc/rhode-island"
  },
  openGraph: {
    title: "File EIN & LLC in Rhode Island - $175 Complete Filing Service | The Vending Locator",
    description: "File your EIN and form your LLC in Rhode Island with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Rhode Island.",
    url: "https://www.thevendinglocator.com/ein-llc/rhode-island",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "File EIN & LLC in Rhode Island - $175 Complete Filing Service",
    description: "File your EIN and form your LLC in Rhode Island. State filing fee: $125 + $50 service fee = $175 total. Fast, secure business formation."
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

export default function Rhode IslandEinLLCPage() {
  return <PageClient />
}

