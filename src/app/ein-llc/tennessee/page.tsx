import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "File EIN & LLC in Tennessee - $175 Complete Filing Service | The Vending Locator",
  description: "File your EIN and form your LLC in Tennessee with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Tennessee.",
  keywords: "file LLC Tennessee, form LLC Tennessee, EIN Tennessee, Tennessee LLC filing, Tennessee business formation, file LLC online Tennessee, Tennessee LLC service, get EIN Tennessee, Tennessee Secretary of State LLC, Tennessee LLC cost",
  alternates: {
    canonical: "https://www.thevendinglocator.com/ein-llc/tennessee"
  },
  openGraph: {
    title: "File EIN & LLC in Tennessee - $175 Complete Filing Service | The Vending Locator",
    description: "File your EIN and form your LLC in Tennessee with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Tennessee.",
    url: "https://www.thevendinglocator.com/ein-llc/tennessee",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "File EIN & LLC in Tennessee - $175 Complete Filing Service",
    description: "File your EIN and form your LLC in Tennessee. State filing fee: $125 + $50 service fee = $175 total. Fast, secure business formation."
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

export default function TennesseeEinLLCPage() {
  return <PageClient />
}

