import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "File EIN & LLC in Washington - $175 Complete Filing Service | The Vending Locator",
  description: "File your EIN and form your LLC in Washington with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Washington.",
  keywords: "file LLC Washington, form LLC Washington, EIN Washington, Washington LLC filing, Washington business formation, file LLC online Washington, Washington LLC service, get EIN Washington, Washington Secretary of State LLC, Washington LLC cost",
  alternates: {
    canonical: "https://www.thevendinglocator.com/ein-llc/washington"
  },
  openGraph: {
    title: "File EIN & LLC in Washington - $175 Complete Filing Service | The Vending Locator",
    description: "File your EIN and form your LLC in Washington with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Washington.",
    url: "https://www.thevendinglocator.com/ein-llc/washington",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "File EIN & LLC in Washington - $175 Complete Filing Service",
    description: "File your EIN and form your LLC in Washington. State filing fee: $125 + $50 service fee = $175 total. Fast, secure business formation."
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

export default function WashingtonEinLLCPage() {
  return <PageClient />
}

