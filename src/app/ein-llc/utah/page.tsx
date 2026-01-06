import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "File EIN & LLC in Utah - $175 Complete Filing Service | The Vending Locator",
  description: "File your EIN and form your LLC in Utah with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Utah.",
  keywords: "file LLC Utah, form LLC Utah, EIN Utah, Utah LLC filing, Utah business formation, file LLC online Utah, Utah LLC service, get EIN Utah, Utah Secretary of State LLC, Utah LLC cost",
  alternates: {
    canonical: "https://www.thevendinglocator.com/ein-llc/utah"
  },
  openGraph: {
    title: "File EIN & LLC in Utah - $175 Complete Filing Service | The Vending Locator",
    description: "File your EIN and form your LLC in Utah with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Utah.",
    url: "https://www.thevendinglocator.com/ein-llc/utah",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "File EIN & LLC in Utah - $175 Complete Filing Service",
    description: "File your EIN and form your LLC in Utah. State filing fee: $125 + $50 service fee = $175 total. Fast, secure business formation."
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

export default function UtahEinLLCPage() {
  return <PageClient />
}

