import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "File EIN & LLC in Alaska - $175 Complete Filing Service | The Vending Locator",
  description: "File your EIN and form your LLC in Alaska with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Alaska.",
  keywords: "file LLC Alaska, form LLC Alaska, EIN Alaska, Alaska LLC filing, Alaska business formation, file LLC online Alaska, Alaska LLC service, get EIN Alaska, Alaska Secretary of State LLC, Alaska LLC cost",
  alternates: {
    canonical: "https://www.thevendinglocator.com/ein-llc/alaska"
  },
  openGraph: {
    title: "File EIN & LLC in Alaska - $175 Complete Filing Service | The Vending Locator",
    description: "File your EIN and form your LLC in Alaska with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Alaska.",
    url: "https://www.thevendinglocator.com/ein-llc/alaska",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "File EIN & LLC in Alaska - $175 Complete Filing Service",
    description: "File your EIN and form your LLC in Alaska. State filing fee: $125 + $50 service fee = $175 total. Fast, secure business formation."
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

export default function AlaskaEinLLCPage() {
  return <PageClient />
}

