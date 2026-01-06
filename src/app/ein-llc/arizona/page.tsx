import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "File EIN & LLC in Arizona - $175 Complete Filing Service | The Vending Locator",
  description: "File your EIN and form your LLC in Arizona with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Arizona.",
  keywords: "file LLC Arizona, form LLC Arizona, EIN Arizona, Arizona LLC filing, Arizona business formation, file LLC online Arizona, Arizona LLC service, get EIN Arizona, Arizona Secretary of State LLC, Arizona LLC cost",
  alternates: {
    canonical: "https://www.thevendinglocator.com/ein-llc/arizona"
  },
  openGraph: {
    title: "File EIN & LLC in Arizona - $175 Complete Filing Service | The Vending Locator",
    description: "File your EIN and form your LLC in Arizona with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Arizona.",
    url: "https://www.thevendinglocator.com/ein-llc/arizona",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "File EIN & LLC in Arizona - $175 Complete Filing Service",
    description: "File your EIN and form your LLC in Arizona. State filing fee: $125 + $50 service fee = $175 total. Fast, secure business formation."
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

export default function ArizonaEinLLCPage() {
  return <PageClient />
}

