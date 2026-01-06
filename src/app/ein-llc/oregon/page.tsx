import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "File EIN & LLC in Oregon - $175 Complete Filing Service | The Vending Locator",
  description: "File your EIN and form your LLC in Oregon with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Oregon.",
  keywords: "file LLC Oregon, form LLC Oregon, EIN Oregon, Oregon LLC filing, Oregon business formation, file LLC online Oregon, Oregon LLC service, get EIN Oregon, Oregon Secretary of State LLC, Oregon LLC cost",
  alternates: {
    canonical: "https://www.thevendinglocator.com/ein-llc/oregon"
  },
  openGraph: {
    title: "File EIN & LLC in Oregon - $175 Complete Filing Service | The Vending Locator",
    description: "File your EIN and form your LLC in Oregon with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Oregon.",
    url: "https://www.thevendinglocator.com/ein-llc/oregon",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "File EIN & LLC in Oregon - $175 Complete Filing Service",
    description: "File your EIN and form your LLC in Oregon. State filing fee: $125 + $50 service fee = $175 total. Fast, secure business formation."
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

export default function OregonEinLLCPage() {
  return <PageClient />
}

