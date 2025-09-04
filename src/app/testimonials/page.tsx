import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Testimonials - The Vending Locator',
  description: 'Real feedback from vending operators nationwide about our verified leads and research process.',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/testimonials',
  },
  openGraph: {
    title: 'Testimonials - The Vending Locator',
    description: 'See results operators are getting with our verified vending location leads.',
    url: 'https://www.thevendinglocator.com/testimonials',
    type: 'website',
    siteName: 'The Vending Locator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Testimonials - The Vending Locator',
    description: 'See results operators are getting with our verified vending location leads.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function Page() {
  return <PageClient />
}


