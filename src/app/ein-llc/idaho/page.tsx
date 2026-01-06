import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "File EIN & LLC in Idaho - $175 Complete Filing Service | The Vending Locator",
  description: "File your EIN and form your LLC in Idaho with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Idaho.",
  keywords: "file LLC Idaho, form LLC Idaho, EIN Idaho, Idaho LLC filing, Idaho business formation, file LLC online Idaho, Idaho LLC service, get EIN Idaho, Idaho Secretary of State LLC, Idaho LLC cost",
  alternates: {
    canonical: "https://www.thevendinglocator.com/ein-llc/idaho"
  },
  openGraph: {
    title: "File EIN & LLC in Idaho - $175 Complete Filing Service | The Vending Locator",
    description: "File your EIN and form your LLC in Idaho with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Idaho.",
    url: "https://www.thevendinglocator.com/ein-llc/idaho",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "File EIN & LLC in Idaho - $175 Complete Filing Service",
    description: "File your EIN and form your LLC in Idaho. State filing fee: $125 + $50 service fee = $175 total. Fast, secure business formation."
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

export default function IdahoEinLLCPage() {
  return <PageClient />
}

