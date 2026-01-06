import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "File EIN & LLC in Vermont - $175 Complete Filing Service | The Vending Locator",
  description: "File your EIN and form your LLC in Vermont with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Vermont.",
  keywords: "file LLC Vermont, form LLC Vermont, EIN Vermont, Vermont LLC filing, Vermont business formation, file LLC online Vermont, Vermont LLC service, get EIN Vermont, Vermont Secretary of State LLC, Vermont LLC cost",
  alternates: {
    canonical: "https://www.thevendinglocator.com/ein-llc/vermont"
  },
  openGraph: {
    title: "File EIN & LLC in Vermont - $175 Complete Filing Service | The Vending Locator",
    description: "File your EIN and form your LLC in Vermont with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Vermont.",
    url: "https://www.thevendinglocator.com/ein-llc/vermont",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "File EIN & LLC in Vermont - $175 Complete Filing Service",
    description: "File your EIN and form your LLC in Vermont. State filing fee: $125 + $50 service fee = $175 total. Fast, secure business formation."
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

export default function VermontEinLLCPage() {
  return <PageClient />
}

