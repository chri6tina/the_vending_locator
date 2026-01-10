import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "List Your Vending Company | Get Featured on Our Directory | The Vending Locator",
  description: "Get your vending company featured on our directory. Increase visibility, improve SEO rankings, and reach more businesses looking for vending services.",
  keywords: "list vending company, vending company directory, vending company listing, get featured vending company",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-companies-contact"
  },
  openGraph: {
    title: "List Your Vending Company | Get Featured on Our Directory",
    description: "Get your vending company featured on our directory. Increase visibility and reach more businesses.",
    url: "https://www.thevendinglocator.com/vending-companies-contact",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "List Your Vending Company | Get Featured",
    description: "Get your vending company featured on our directory."
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

export default function VendingCompaniesContactPage() {
  return <PageClient />
}
