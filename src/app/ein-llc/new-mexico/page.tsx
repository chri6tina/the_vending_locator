import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "File EIN & LLC in New Mexico - $175 Complete Filing Service | The Vending Locator",
  description: "File your EIN and form your LLC in New Mexico with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in New Mexico.",
  keywords: "file LLC New Mexico, form LLC New Mexico, EIN New Mexico, New Mexico LLC filing, New Mexico business formation, file LLC online New Mexico, New Mexico LLC service, get EIN New Mexico, New Mexico Secretary of State LLC, New Mexico LLC cost",
  alternates: {
    canonical: "https://www.thevendinglocator.com/ein-llc/new-mexico"
  },
  openGraph: {
    title: "File EIN & LLC in New Mexico - $175 Complete Filing Service | The Vending Locator",
    description: "File your EIN and form your LLC in New Mexico with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in New Mexico.",
    url: "https://www.thevendinglocator.com/ein-llc/new-mexico",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "File EIN & LLC in New Mexico - $175 Complete Filing Service",
    description: "File your EIN and form your LLC in New Mexico. State filing fee: $125 + $50 service fee = $175 total. Fast, secure business formation."
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

export default function NewMexicoEinLLCPage() {
  return <PageClient />
}

