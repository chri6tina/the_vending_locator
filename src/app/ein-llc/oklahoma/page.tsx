import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "File EIN & LLC in Oklahoma - $175 Complete Filing Service | The Vending Locator",
  description: "File your EIN and form your LLC in Oklahoma with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Oklahoma.",
  keywords: "file LLC Oklahoma, form LLC Oklahoma, EIN Oklahoma, Oklahoma LLC filing, Oklahoma business formation, file LLC online Oklahoma, Oklahoma LLC service, get EIN Oklahoma, Oklahoma Secretary of State LLC, Oklahoma LLC cost",
  alternates: {
    canonical: "https://www.thevendinglocator.com/ein-llc/oklahoma"
  },
  openGraph: {
    title: "File EIN & LLC in Oklahoma - $175 Complete Filing Service | The Vending Locator",
    description: "File your EIN and form your LLC in Oklahoma with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Oklahoma.",
    url: "https://www.thevendinglocator.com/ein-llc/oklahoma",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "File EIN & LLC in Oklahoma - $175 Complete Filing Service",
    description: "File your EIN and form your LLC in Oklahoma. State filing fee: $125 + $50 service fee = $175 total. Fast, secure business formation."
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

export default function OklahomaEinLLCPage() {
  return <PageClient />
}

