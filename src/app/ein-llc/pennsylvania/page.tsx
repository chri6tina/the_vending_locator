import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "File EIN & LLC in Pennsylvania - $175 Complete Filing Service | The Vending Locator",
  description: "File your EIN and form your LLC in Pennsylvania with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Pennsylvania.",
  keywords: "file LLC Pennsylvania, form LLC Pennsylvania, EIN Pennsylvania, Pennsylvania LLC filing, Pennsylvania business formation, file LLC online Pennsylvania, Pennsylvania LLC service, get EIN Pennsylvania, Pennsylvania Secretary of State LLC, Pennsylvania LLC cost",
  alternates: {
    canonical: "https://www.thevendinglocator.com/ein-llc/pennsylvania"
  },
  openGraph: {
    title: "File EIN & LLC in Pennsylvania - $175 Complete Filing Service | The Vending Locator",
    description: "File your EIN and form your LLC in Pennsylvania with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Pennsylvania.",
    url: "https://www.thevendinglocator.com/ein-llc/pennsylvania",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "File EIN & LLC in Pennsylvania - $175 Complete Filing Service",
    description: "File your EIN and form your LLC in Pennsylvania. State filing fee: $125 + $50 service fee = $175 total. Fast, secure business formation."
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

export default function PennsylvaniaEinLLCPage() {
  return <PageClient />
}

