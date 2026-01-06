import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "File EIN & LLC in Colorado - $175 Complete Filing Service | The Vending Locator",
  description: "File your EIN and form your LLC in Colorado with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Colorado.",
  keywords: "file LLC Colorado, form LLC Colorado, EIN Colorado, Colorado LLC filing, Colorado business formation, file LLC online Colorado, Colorado LLC service, get EIN Colorado, Colorado Secretary of State LLC, Colorado LLC cost",
  alternates: {
    canonical: "https://www.thevendinglocator.com/ein-llc/colorado"
  },
  openGraph: {
    title: "File EIN & LLC in Colorado - $175 Complete Filing Service | The Vending Locator",
    description: "File your EIN and form your LLC in Colorado with our complete filing service. State filing fee: $125 + $50 service fee = $175 total. Fast, secure, and hassle-free business formation in Colorado.",
    url: "https://www.thevendinglocator.com/ein-llc/colorado",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "File EIN & LLC in Colorado - $175 Complete Filing Service",
    description: "File your EIN and form your LLC in Colorado. State filing fee: $125 + $50 service fee = $175 total. Fast, secure business formation."
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

export default function ColoradoEinLLCPage() {
  return <PageClient />
}

