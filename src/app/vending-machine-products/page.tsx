import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Top Selling Vending Machine Products 2025 - Drinks & Snacks Guide - The Vending Locator',
  description: 'Complete guide to the best-selling vending machine products in 2025. Discover top drinks, snacks, healthy options, and seasonal products that maximize profits in offices, schools, gyms, and more.',
  keywords: [
    'vending machine products',
    'best selling vending machine snacks',
    'top vending machine drinks',
    'vending machine product selection',
    'vending machine inventory',
    'vending machine profit margins',
    'healthy vending options',
    'vending machine trends 2025'
  ],
  alternates: { canonical: 'https://www.thevendinglocator.com/vending-machine-products' },
  openGraph: {
    title: 'Top Selling Vending Machine Products 2025 - Drinks & Snacks Guide',
    description: 'Complete guide to the best-selling vending machine products in 2025. Discover top drinks, snacks, healthy options, and seasonal products that maximize profits.',
    url: 'https://www.thevendinglocator.com/vending-machine-products',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Selling Vending Machine Products 2025 - Drinks & Snacks Guide',
    description: 'Complete guide to the best-selling vending machine products in 2025. Discover top drinks, snacks, healthy options, and seasonal products that maximize profits.'
  },
  robots: { index: true, follow: true }
}

export default function VendingMachineProductsPage() {
  return <PageClient />
}
