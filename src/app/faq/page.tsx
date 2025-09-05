import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Business FAQ - Complete Guide 2025 - The Vending Locator',
  description: 'Complete FAQ covering vending machine business startup costs, profitability, location finding, legal requirements, operations, and our lead generation service. Everything you need to know to start your vending business.',
  keywords: [
    'vending machine business faq',
    'vending machine startup costs',
    'vending machine profitability 2025',
    'vending machine locations',
    'vending machine business license',
    'vending machine insurance',
    'vending locator service',
    'vending machine leads'
  ],
  alternates: { canonical: 'https://www.thevendinglocator.com/faq' },
  openGraph: {
    title: 'Vending Machine Business FAQ - Complete Guide 2025 - The Vending Locator',
    description: 'Complete FAQ covering startup costs, profitability, location finding, legal requirements, operations, and our lead generation service.',
    url: 'https://www.thevendinglocator.com/faq',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machine Business FAQ - Complete Guide 2025 - The Vending Locator',
    description: 'Complete FAQ covering startup costs, profitability, location finding, legal requirements, operations, and our lead generation service.'
  },
  robots: { index: true, follow: true }
}

export default function FAQPage() {
  return <PageClient />
}


