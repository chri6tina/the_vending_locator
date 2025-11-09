import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Haha US360 Mini Smart Cooler | Product Details & Specs',
  description:
    'Dive deep into the Haha US360 Mini grab-and-go smart cooler. Explore detailed specifications, features, and management tools for modern vending operators.',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/mini'
  }
}

export default function HahaMiniPage() {
  return <PageClient />
}
