import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "File EIN & LLC in South Dakota - $175 Complete Filing Service | The Vending Locator",
  description: "File your EIN and form your LLC in South Dakota with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in South Dakota.",
  keywords: "file LLC South Dakota, form LLC South Dakota, EIN South Dakota, South Dakota LLC filing, South Dakota business formation, file LLC online South Dakota, South Dakota LLC service, get EIN South Dakota, South Dakota Secretary of State LLC, South Dakota LLC cost",
  alternates: {
    canonical: "https://www.thevendinglocator.com/ein-llc/south-dakota"
  },
  openGraph: {
    title: "File EIN & LLC in South Dakota - $175 Complete Filing Service | The Vending Locator",
    description: "File your EIN and form your LLC in South Dakota with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in South Dakota.",
    url: "https://www.thevendinglocator.com/ein-llc/south-dakota",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "File EIN & LLC in South Dakota - $175 Complete Filing Service",
    description: "File your EIN and form your LLC in South Dakota. State filing fee: $125 + $50 service fee = $175 total. Fast, secure business formation."
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

export default function SouthDakotaEinLLCPage() {
  return <PageClient />
}

