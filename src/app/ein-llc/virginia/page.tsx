import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "File EIN & LLC in Virginia - $175 Complete Filing Service | The Vending Locator",
  description: "File your EIN and form your LLC in Virginia with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Virginia.",
  keywords: "file LLC Virginia, form LLC Virginia, EIN Virginia, Virginia LLC filing, Virginia business formation, file LLC online Virginia, Virginia LLC service, get EIN Virginia, Virginia Secretary of State LLC, Virginia LLC cost",
  alternates: {
    canonical: "https://www.thevendinglocator.com/ein-llc/virginia"
  },
  openGraph: {
    title: "File EIN & LLC in Virginia - $175 Complete Filing Service | The Vending Locator",
    description: "File your EIN and form your LLC in Virginia with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Virginia.",
    url: "https://www.thevendinglocator.com/ein-llc/virginia",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "File EIN & LLC in Virginia - $175 Complete Filing Service",
    description: "File your EIN and form your LLC in Virginia. State filing fee: $125 + $50 service fee = $175 total. Fast, secure business formation."
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

export default function VirginiaEinLLCPage() {
  return <PageClient />
}

