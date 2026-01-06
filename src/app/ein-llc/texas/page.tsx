import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "File EIN & LLC in Texas - $175 Complete Filing Service | The Vending Locator",
  description: "File your EIN and form your LLC in Texas with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Texas.",
  keywords: "file LLC Texas, form LLC Texas, EIN Texas, Texas LLC filing, Texas business formation, file LLC online Texas, Texas LLC service, get EIN Texas, Texas Secretary of State LLC, Texas LLC cost",
  alternates: {
    canonical: "https://www.thevendinglocator.com/ein-llc/texas"
  },
  openGraph: {
    title: "File EIN & LLC in Texas - $175 Complete Filing Service | The Vending Locator",
    description: "File your EIN and form your LLC in Texas with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Texas.",
    url: "https://www.thevendinglocator.com/ein-llc/texas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "File EIN & LLC in Texas - $175 Complete Filing Service",
    description: "File your EIN and form your LLC in Texas. State filing fee: $125 + $50 service fee = $175 total. Fast, secure business formation."
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

export default function TexasEinLLCPage() {
  return <PageClient />
}

