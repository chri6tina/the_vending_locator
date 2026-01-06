import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "File EIN & LLC in Kentucky - $175 Complete Filing Service | The Vending Locator",
  description: "File your EIN and form your LLC in Kentucky with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Kentucky.",
  keywords: "file LLC Kentucky, form LLC Kentucky, EIN Kentucky, Kentucky LLC filing, Kentucky business formation, file LLC online Kentucky, Kentucky LLC service, get EIN Kentucky, Kentucky Secretary of State LLC, Kentucky LLC cost",
  alternates: {
    canonical: "https://www.thevendinglocator.com/ein-llc/kentucky"
  },
  openGraph: {
    title: "File EIN & LLC in Kentucky - $175 Complete Filing Service | The Vending Locator",
    description: "File your EIN and form your LLC in Kentucky with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Kentucky.",
    url: "https://www.thevendinglocator.com/ein-llc/kentucky",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "File EIN & LLC in Kentucky - $175 Complete Filing Service",
    description: "File your EIN and form your LLC in Kentucky. State filing fee: $125 + $50 service fee = $175 total. Fast, secure business formation."
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

export default function KentuckyEinLLCPage() {
  return <PageClient />
}

