import { Metadata } from 'next'
import RichardsonPage from './pageClient'

const canonicalUrl =
  'https://www.thevendinglocator.com/vending-machines-for-sale-in-richardson-texas'

export const metadata: Metadata = {
  title:
    'Vending Machines for Sale in Richardson, Texas | Smart Coolers for Telecom Corridor® & UT Dallas',
  description:
    'Install Haha AI smart vending machines across Richardson, Texas. Serve Telecom Corridor® corporate campuses, UT Dallas, Baylor Scott & White, and Richardson Innovation Quarter with 24/7 support.',
  keywords:
    'Richardson vending machines for sale, smart vending Richardson TX, haha smart coolers Telecom Corridor, UT Dallas vending, Baylor Scott & White vending machines',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title:
      'Vending Machines for Sale in Richardson, Texas | Smart Coolers for Telecom Corridor® & UT Dallas',
    description:
      'Deliver AI-powered Haha smart coolers to Richardson technology campuses, healthcare systems, and education sites with nonstop support.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Vending Machines for Sale in Richardson, Texas | Smart Coolers for Telecom Corridor® & UT Dallas',
    description:
      'Modernise Richardson vending with Haha AI smart coolers, Amazon availability, and Telegram support across North Dallas.',
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

export const revalidate = 3600

export default function RichardsonTexasVendingPage() {
  return <RichardsonPage />
}

