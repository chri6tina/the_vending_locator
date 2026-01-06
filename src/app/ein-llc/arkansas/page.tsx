import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "File EIN & LLC in Arkansas - $175 Complete Filing Service | The Vending Locator",
  description: "File your EIN and form your LLC in Arkansas with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Arkansas.",
  keywords: "file LLC Arkansas, form LLC Arkansas, EIN Arkansas, Arkansas LLC filing, Arkansas business formation, file LLC online Arkansas, Arkansas LLC service, get EIN Arkansas, Arkansas Secretary of State LLC, Arkansas LLC cost",
  alternates: {
    canonical: "https://www.thevendinglocator.com/ein-llc/arkansas"
  },
  openGraph: {
    title: "File EIN & LLC in Arkansas - $175 Complete Filing Service | The Vending Locator",
    description: "File your EIN and form your LLC in Arkansas with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Arkansas.",
    url: "https://www.thevendinglocator.com/ein-llc/arkansas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "File EIN & LLC in Arkansas - $175 Complete Filing Service",
    description: "File your EIN and form your LLC in Arkansas. State filing fee: $125 + $50 service fee = $175 total. Fast, secure business formation."
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

export default function ArkansasEinLLCPage() {
  return <PageClient />
}

