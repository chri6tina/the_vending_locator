import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "File EIN & Form LLC Online - Complete Business Formation Service | The Vending Locator",
  description: "File your EIN and form your LLC in any state with our complete business formation service. State filing fee + $50 service fee. Fast, secure, and hassle-free business formation.",
  keywords: "file LLC online, form LLC, get EIN, EIN application, LLC filing service, business formation, file LLC by state, LLC service, EIN and LLC filing",
  alternates: {
    canonical: "https://www.thevendinglocator.com/ein-llc"
  },
  openGraph: {
    title: "File EIN & Form LLC Online - Complete Business Formation Service | The Vending Locator",
    description: "File your EIN and form your LLC in any state with our complete business formation service. State filing fee + $50 service fee. Fast, secure, and hassle-free business formation.",
    url: "https://www.thevendinglocator.com/ein-llc",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "File EIN & Form LLC Online - Complete Business Formation Service | The Vending Locator",
    description: "File your EIN and form your LLC in any state. State filing fee + $50 service fee. Fast, secure, and hassle-free business formation."
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

export default function EinLLCPage() {
  return <PageClient />
}

