import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "File EIN & LLC in California - $175 Complete Filing Service | The Vending Locator",
  description: "File your EIN and form your LLC in California with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in California.",
  keywords: "file LLC California, form LLC California, EIN California, California LLC filing, California business formation, file LLC online California, California LLC service, get EIN California, California Secretary of State LLC, California LLC cost",
  alternates: {
    canonical: "https://www.thevendinglocator.com/ein-llc/california"
  },
  openGraph: {
    title: "File EIN & LLC in California - $175 Complete Filing Service | The Vending Locator",
    description: "File your EIN and form your LLC in California with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in California.",
    url: "https://www.thevendinglocator.com/ein-llc/california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "File EIN & LLC in California - $175 Complete Filing Service",
    description: "File your EIN and form your LLC in California. State filing fee: $125 + $50 service fee = $175 total. Fast, secure business formation."
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

export default function CaliforniaEinLLCPage() {
  return <PageClient />
}

