import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "File EIN & LLC in Nevada - $175 Complete Filing Service | The Vending Locator",
  description: "File your EIN and form your LLC in Nevada with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Nevada.",
  keywords: "file LLC Nevada, form LLC Nevada, EIN Nevada, Nevada LLC filing, Nevada business formation, file LLC online Nevada, Nevada LLC service, get EIN Nevada, Nevada Secretary of State LLC, Nevada LLC cost",
  alternates: {
    canonical: "https://www.thevendinglocator.com/ein-llc/nevada"
  },
  openGraph: {
    title: "File EIN & LLC in Nevada - $175 Complete Filing Service | The Vending Locator",
    description: "File your EIN and form your LLC in Nevada with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Nevada.",
    url: "https://www.thevendinglocator.com/ein-llc/nevada",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "File EIN & LLC in Nevada - $175 Complete Filing Service",
    description: "File your EIN and form your LLC in Nevada. State filing fee: $125 + $50 service fee = $175 total. Fast, secure business formation."
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

export default function NevadaEinLLCPage() {
  return <PageClient />
}

