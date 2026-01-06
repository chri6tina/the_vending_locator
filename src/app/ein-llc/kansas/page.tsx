import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "File EIN & LLC in Kansas - $175 Complete Filing Service | The Vending Locator",
  description: "File your EIN and form your LLC in Kansas with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Kansas.",
  keywords: "file LLC Kansas, form LLC Kansas, EIN Kansas, Kansas LLC filing, Kansas business formation, file LLC online Kansas, Kansas LLC service, get EIN Kansas, Kansas Secretary of State LLC, Kansas LLC cost",
  alternates: {
    canonical: "https://www.thevendinglocator.com/ein-llc/kansas"
  },
  openGraph: {
    title: "File EIN & LLC in Kansas - $175 Complete Filing Service | The Vending Locator",
    description: "File your EIN and form your LLC in Kansas with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Kansas.",
    url: "https://www.thevendinglocator.com/ein-llc/kansas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "File EIN & LLC in Kansas - $175 Complete Filing Service",
    description: "File your EIN and form your LLC in Kansas. State filing fee: $125 + $50 service fee = $175 total. Fast, secure business formation."
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

export default function KansasEinLLCPage() {
  return <PageClient />
}

