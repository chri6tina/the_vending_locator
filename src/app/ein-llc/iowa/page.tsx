import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "File EIN & LLC in Iowa - $175 Complete Filing Service | The Vending Locator",
  description: "File your EIN and form your LLC in Iowa with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Iowa.",
  keywords: "file LLC Iowa, form LLC Iowa, EIN Iowa, Iowa LLC filing, Iowa business formation, file LLC online Iowa, Iowa LLC service, get EIN Iowa, Iowa Secretary of State LLC, Iowa LLC cost",
  alternates: {
    canonical: "https://www.thevendinglocator.com/ein-llc/iowa"
  },
  openGraph: {
    title: "File EIN & LLC in Iowa - $175 Complete Filing Service | The Vending Locator",
    description: "File your EIN and form your LLC in Iowa with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Iowa.",
    url: "https://www.thevendinglocator.com/ein-llc/iowa",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "File EIN & LLC in Iowa - $175 Complete Filing Service",
    description: "File your EIN and form your LLC in Iowa. State filing fee: $125 + $50 service fee = $175 total. Fast, secure business formation."
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

export default function IowaEinLLCPage() {
  return <PageClient />
}

