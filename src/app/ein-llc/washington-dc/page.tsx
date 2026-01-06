import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "File EIN & LLC in Washington DC - $175 Complete Filing Service | The Vending Locator",
  description: "File your EIN and form your LLC in Washington DC with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Washington DC.",
  keywords: "file LLC Washington DC, form LLC Washington DC, EIN Washington DC, Washington DC LLC filing, Washington DC business formation, file LLC online Washington DC, Washington DC LLC service, get EIN Washington DC, Washington DC Secretary of State LLC, Washington DC LLC cost",
  alternates: {
    canonical: "https://www.thevendinglocator.com/ein-llc/washington-dc"
  },
  openGraph: {
    title: "File EIN & LLC in Washington DC - $175 Complete Filing Service | The Vending Locator",
    description: "File your EIN and form your LLC in Washington DC with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Washington DC.",
    url: "https://www.thevendinglocator.com/ein-llc/washington-dc",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "File EIN & LLC in Washington DC - $175 Complete Filing Service",
    description: "File your EIN and form your LLC in Washington DC. State filing fee: $125 + $50 service fee = $175 total. Fast, secure business formation."
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

export default function WashingtonDCEinLLCPage() {
  return <PageClient />
}

