import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "File EIN & LLC in Minnesota - $175 Complete Filing Service | The Vending Locator",
  description: "File your EIN and form your LLC in Minnesota with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Minnesota.",
  keywords: "file LLC Minnesota, form LLC Minnesota, EIN Minnesota, Minnesota LLC filing, Minnesota business formation, file LLC online Minnesota, Minnesota LLC service, get EIN Minnesota, Minnesota Secretary of State LLC, Minnesota LLC cost",
  alternates: {
    canonical: "https://www.thevendinglocator.com/ein-llc/minnesota"
  },
  openGraph: {
    title: "File EIN & LLC in Minnesota - $175 Complete Filing Service | The Vending Locator",
    description: "File your EIN and form your LLC in Minnesota with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Minnesota.",
    url: "https://www.thevendinglocator.com/ein-llc/minnesota",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "File EIN & LLC in Minnesota - $175 Complete Filing Service",
    description: "File your EIN and form your LLC in Minnesota. State filing fee: $125 + $50 service fee = $175 total. Fast, secure business formation."
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

export default function MinnesotaEinLLCPage() {
  return <PageClient />
}

