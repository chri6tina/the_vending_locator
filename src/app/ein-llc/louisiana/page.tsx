import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "File EIN & LLC in Louisiana - $175 Complete Filing Service | The Vending Locator",
  description: "File your EIN and form your LLC in Louisiana with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Louisiana.",
  keywords: "file LLC Louisiana, form LLC Louisiana, EIN Louisiana, Louisiana LLC filing, Louisiana business formation, file LLC online Louisiana, Louisiana LLC service, get EIN Louisiana, Louisiana Secretary of State LLC, Louisiana LLC cost",
  alternates: {
    canonical: "https://www.thevendinglocator.com/ein-llc/louisiana"
  },
  openGraph: {
    title: "File EIN & LLC in Louisiana - $175 Complete Filing Service | The Vending Locator",
    description: "File your EIN and form your LLC in Louisiana with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Louisiana.",
    url: "https://www.thevendinglocator.com/ein-llc/louisiana",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "File EIN & LLC in Louisiana - $175 Complete Filing Service",
    description: "File your EIN and form your LLC in Louisiana. State filing fee: $125 + $50 service fee = $175 total. Fast, secure business formation."
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

export default function LouisianaEinLLCPage() {
  return <PageClient />
}

