import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Business Contract Generator | The Vending Locator',
  description:
    'Create a vending machine placement contract in minutes. Fill in your operator and location details and generate a ready-to-use agreement.',
  keywords:
    'vending machine contract, vending agreement, placement contract, vending business contract, vending operator agreement',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machine-business-contract'
  },
  openGraph: {
    title: 'Vending Machine Business Contract Generator | The Vending Locator',
    description:
      'Create a vending machine placement contract in minutes. Fill in your operator and location details and generate a ready-to-use agreement.',
    url: 'https://www.thevendinglocator.com/vending-machine-business-contract',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machine Business Contract Generator | The Vending Locator',
    description:
      'Create a vending machine placement contract in minutes. Fill in your operator and location details and generate a ready-to-use agreement.'
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

export default function Page() {
  return <PageClient />
}
