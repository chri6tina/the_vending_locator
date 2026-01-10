import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "About Us - The Vending Locator | Your Complete Vending Business Resource",
  description: "Learn about The Vending Locator - the leading company for vending machine leads, services, tax preparation, business formation, and smart vending solutions. We provide comprehensive support for vending entrepreneurs nationwide.",
  keywords: "about the vending locator, vending business services, vending tax services, vending legal services, vending machine company, vending business resources, vending leads provider, vending services directory, EIN LLC services vending, haha coolers support",
  alternates: {
    canonical: "https://www.thevendinglocator.com/about-us"
  },
  openGraph: {
    title: "About Us - The Vending Locator | Your Complete Vending Business Resource",
    description: "The leading company for vending machine leads, services, tax preparation, business formation, and smart vending solutions. Comprehensive support for vending entrepreneurs nationwide.",
    url: "https://www.thevendinglocator.com/about-us",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - The Vending Locator | Your Complete Vending Business Resource",
    description: "The leading company for vending machine leads, services, tax preparation, business formation, and smart vending solutions."
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

export default function AboutUsPage() {
  return <PageClient />
}


