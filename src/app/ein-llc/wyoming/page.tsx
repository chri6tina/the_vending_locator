import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "File EIN & LLC in Wyoming - $175 Complete Filing Service | The Vending Locator",
  description: "File your EIN and form your LLC in Wyoming with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Wyoming.",
  keywords: "file LLC Wyoming, form LLC Wyoming, EIN Wyoming, Wyoming LLC filing, Wyoming business formation, file LLC online Wyoming, Wyoming LLC service, get EIN Wyoming, Wyoming Secretary of State LLC, Wyoming LLC cost",
  alternates: {
    canonical: "https://www.thevendinglocator.com/ein-llc/wyoming"
  },
  openGraph: {
    title: "File EIN & LLC in Wyoming - $175 Complete Filing Service | The Vending Locator",
    description: "File your EIN and form your LLC in Wyoming with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Wyoming.",
    url: "https://www.thevendinglocator.com/ein-llc/wyoming",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "File EIN & LLC in Wyoming - $175 Complete Filing Service",
    description: "File your EIN and form your LLC in Wyoming. State filing fee: $125 + $50 service fee = $175 total. Fast, secure business formation."
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

export default function WyomingEinLLCPage() {
  return <PageClient />
}

