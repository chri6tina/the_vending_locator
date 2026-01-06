import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "File EIN & LLC in Wisconsin - $175 Complete Filing Service | The Vending Locator",
  description: "File your EIN and form your LLC in Wisconsin with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Wisconsin.",
  keywords: "file LLC Wisconsin, form LLC Wisconsin, EIN Wisconsin, Wisconsin LLC filing, Wisconsin business formation, file LLC online Wisconsin, Wisconsin LLC service, get EIN Wisconsin, Wisconsin Secretary of State LLC, Wisconsin LLC cost",
  alternates: {
    canonical: "https://www.thevendinglocator.com/ein-llc/wisconsin"
  },
  openGraph: {
    title: "File EIN & LLC in Wisconsin - $175 Complete Filing Service | The Vending Locator",
    description: "File your EIN and form your LLC in Wisconsin with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Wisconsin.",
    url: "https://www.thevendinglocator.com/ein-llc/wisconsin",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "File EIN & LLC in Wisconsin - $175 Complete Filing Service",
    description: "File your EIN and form your LLC in Wisconsin. State filing fee: $125 + $50 service fee = $175 total. Fast, secure business formation."
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

export default function WisconsinEinLLCPage() {
  return <PageClient />
}

