import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "File EIN & LLC in Mississippi - $175 Complete Filing Service | The Vending Locator",
  description: "File your EIN and form your LLC in Mississippi with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Mississippi.",
  keywords: "file LLC Mississippi, form LLC Mississippi, EIN Mississippi, Mississippi LLC filing, Mississippi business formation, file LLC online Mississippi, Mississippi LLC service, get EIN Mississippi, Mississippi Secretary of State LLC, Mississippi LLC cost",
  alternates: {
    canonical: "https://www.thevendinglocator.com/ein-llc/mississippi"
  },
  openGraph: {
    title: "File EIN & LLC in Mississippi - $175 Complete Filing Service | The Vending Locator",
    description: "File your EIN and form your LLC in Mississippi with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Mississippi.",
    url: "https://www.thevendinglocator.com/ein-llc/mississippi",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "File EIN & LLC in Mississippi - $175 Complete Filing Service",
    description: "File your EIN and form your LLC in Mississippi. State filing fee: $125 + $50 service fee = $175 total. Fast, secure business formation."
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

export default function MississippiEinLLCPage() {
  return <PageClient />
}

