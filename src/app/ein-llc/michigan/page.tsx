import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "File EIN & LLC in Michigan - $175 Complete Filing Service | The Vending Locator",
  description: "File your EIN and form your LLC in Michigan with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Michigan.",
  keywords: "file LLC Michigan, form LLC Michigan, EIN Michigan, Michigan LLC filing, Michigan business formation, file LLC online Michigan, Michigan LLC service, get EIN Michigan, Michigan Secretary of State LLC, Michigan LLC cost",
  alternates: {
    canonical: "https://www.thevendinglocator.com/ein-llc/michigan"
  },
  openGraph: {
    title: "File EIN & LLC in Michigan - $175 Complete Filing Service | The Vending Locator",
    description: "File your EIN and form your LLC in Michigan with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Michigan.",
    url: "https://www.thevendinglocator.com/ein-llc/michigan",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "File EIN & LLC in Michigan - $175 Complete Filing Service",
    description: "File your EIN and form your LLC in Michigan. State filing fee: $125 + $50 service fee = $175 total. Fast, secure business formation."
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

export default function MichiganEinLLCPage() {
  return <PageClient />
}

