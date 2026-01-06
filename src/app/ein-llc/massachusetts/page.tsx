import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "File EIN & LLC in Massachusetts - $175 Complete Filing Service | The Vending Locator",
  description: "File your EIN and form your LLC in Massachusetts with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Massachusetts.",
  keywords: "file LLC Massachusetts, form LLC Massachusetts, EIN Massachusetts, Massachusetts LLC filing, Massachusetts business formation, file LLC online Massachusetts, Massachusetts LLC service, get EIN Massachusetts, Massachusetts Secretary of State LLC, Massachusetts LLC cost",
  alternates: {
    canonical: "https://www.thevendinglocator.com/ein-llc/massachusetts"
  },
  openGraph: {
    title: "File EIN & LLC in Massachusetts - $175 Complete Filing Service | The Vending Locator",
    description: "File your EIN and form your LLC in Massachusetts with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Massachusetts.",
    url: "https://www.thevendinglocator.com/ein-llc/massachusetts",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "File EIN & LLC in Massachusetts - $175 Complete Filing Service",
    description: "File your EIN and form your LLC in Massachusetts. State filing fee: $125 + $50 service fee = $175 total. Fast, secure business formation."
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

export default function MassachusettsEinLLCPage() {
  return <PageClient />
}

