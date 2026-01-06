import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "File EIN & LLC in New Jersey - $175 Complete Filing Service | The Vending Locator",
  description: "File your EIN and form your LLC in New Jersey with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in New Jersey.",
  keywords: "file LLC New Jersey, form LLC New Jersey, EIN New Jersey, New Jersey LLC filing, New Jersey business formation, file LLC online New Jersey, New Jersey LLC service, get EIN New Jersey, New Jersey Secretary of State LLC, New Jersey LLC cost",
  alternates: {
    canonical: "https://www.thevendinglocator.com/ein-llc/new-jersey"
  },
  openGraph: {
    title: "File EIN & LLC in New Jersey - $175 Complete Filing Service | The Vending Locator",
    description: "File your EIN and form your LLC in New Jersey with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in New Jersey.",
    url: "https://www.thevendinglocator.com/ein-llc/new-jersey",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "File EIN & LLC in New Jersey - $175 Complete Filing Service",
    description: "File your EIN and form your LLC in New Jersey. State filing fee: $125 + $50 service fee = $175 total. Fast, secure business formation."
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

export default function NewJerseyEinLLCPage() {
  return <PageClient />
}

