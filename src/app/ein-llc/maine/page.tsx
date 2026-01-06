import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "File EIN & LLC in Maine - $175 Complete Filing Service | The Vending Locator",
  description: "File your EIN and form your LLC in Maine with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Maine.",
  keywords: "file LLC Maine, form LLC Maine, EIN Maine, Maine LLC filing, Maine business formation, file LLC online Maine, Maine LLC service, get EIN Maine, Maine Secretary of State LLC, Maine LLC cost",
  alternates: {
    canonical: "https://www.thevendinglocator.com/ein-llc/maine"
  },
  openGraph: {
    title: "File EIN & LLC in Maine - $175 Complete Filing Service | The Vending Locator",
    description: "File your EIN and form your LLC in Maine with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Maine.",
    url: "https://www.thevendinglocator.com/ein-llc/maine",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "File EIN & LLC in Maine - $175 Complete Filing Service",
    description: "File your EIN and form your LLC in Maine. State filing fee: $125 + $50 service fee = $175 total. Fast, secure business formation."
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

export default function MaineEinLLCPage() {
  return <PageClient />
}

