import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Locator Fees & Pricing FAQ - The Vending Locator',
  description: 'Transparent answers about vending locator fees, pricing plans, how our service works, and the difference between hot and cold leads. Everything you need to know before you buy.',
  keywords: [
    'vending locator fees',
    'vending locator pricing',
    'vending machine leads pricing',
    'vending locator cost',
    'hot leads vending',
    'cold leads vending'
  ],
  alternates: { canonical: 'https://www.thevendinglocator.com/faq' },
  openGraph: {
    title: 'Vending Locator Fees & Pricing FAQ - The Vending Locator',
    description: 'Transparent answers about pricing, fees, how it works, hot vs cold leads, delivery time, and more.',
    url: 'https://www.thevendinglocator.com/faq',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Locator Fees & Pricing FAQ - The Vending Locator',
    description: 'Pricing, fees, how it works, hot vs cold leads, delivery time, and more.'
  },
  robots: { index: true, follow: true }
}

export default function FAQPage() {
  return <PageClient />
}


