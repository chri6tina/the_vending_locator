import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "File EIN & LLC in Alabama - $175 Complete Filing Service | The Vending Locator",
  description: "File your EIN and form your LLC in Alabama with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Alabama.",
  keywords: "file LLC Alabama, form LLC Alabama, EIN Alabama, Alabama LLC filing, Alabama business formation, file LLC online Alabama, Alabama LLC service, get EIN Alabama, Alabama Secretary of State LLC, Alabama LLC cost",
  alternates: {
    canonical: "https://www.thevendinglocator.com/ein-llc/alabama"
  },
  openGraph: {
    title: "File EIN & LLC in Alabama - $175 Complete Filing Service | The Vending Locator",
    description: "File your EIN and form your LLC in Alabama with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Alabama.",
    url: "https://www.thevendinglocator.com/ein-llc/alabama",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "File EIN & LLC in Alabama - $175 Complete Filing Service",
    description: "File your EIN and form your LLC in Alabama. State filing fee: $125 + $50 service fee = $175 total. Fast, secure business formation."
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

export default function AlabamaEinLLCPage() {
  return <PageClient />
}

