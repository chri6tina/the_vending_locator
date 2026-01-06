import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "File EIN & LLC in Delaware - $175 Complete Filing Service | The Vending Locator",
  description: "File your EIN and form your LLC in Delaware with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Delaware.",
  keywords: "file LLC Delaware, form LLC Delaware, EIN Delaware, Delaware LLC filing, Delaware business formation, file LLC online Delaware, Delaware LLC service, get EIN Delaware, Delaware Secretary of State LLC, Delaware LLC cost",
  alternates: {
    canonical: "https://www.thevendinglocator.com/ein-llc/delaware"
  },
  openGraph: {
    title: "File EIN & LLC in Delaware - $175 Complete Filing Service | The Vending Locator",
    description: "File your EIN and form your LLC in Delaware with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Delaware.",
    url: "https://www.thevendinglocator.com/ein-llc/delaware",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "File EIN & LLC in Delaware - $175 Complete Filing Service",
    description: "File your EIN and form your LLC in Delaware. State filing fee: $125 + $50 service fee = $175 total. Fast, secure business formation."
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

export default function DelawareEinLLCPage() {
  return <PageClient />
}

