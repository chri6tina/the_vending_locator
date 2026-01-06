import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "File EIN & LLC in Montana - $175 Complete Filing Service | The Vending Locator",
  description: "File your EIN and form your LLC in Montana with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Montana.",
  keywords: "file LLC Montana, form LLC Montana, EIN Montana, Montana LLC filing, Montana business formation, file LLC online Montana, Montana LLC service, get EIN Montana, Montana Secretary of State LLC, Montana LLC cost",
  alternates: {
    canonical: "https://www.thevendinglocator.com/ein-llc/montana"
  },
  openGraph: {
    title: "File EIN & LLC in Montana - $175 Complete Filing Service | The Vending Locator",
    description: "File your EIN and form your LLC in Montana with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Montana.",
    url: "https://www.thevendinglocator.com/ein-llc/montana",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "File EIN & LLC in Montana - $175 Complete Filing Service",
    description: "File your EIN and form your LLC in Montana. State filing fee: $125 + $50 service fee = $175 total. Fast, secure business formation."
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

export default function MontanaEinLLCPage() {
  return <PageClient />
}

