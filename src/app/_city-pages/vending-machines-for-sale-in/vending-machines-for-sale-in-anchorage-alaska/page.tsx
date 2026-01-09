import { Metadata } from 'next'
import AnchoragePage from './pageClient'

const canonicalUrl = 'https://www.thevendinglocator.com/vending-machines-for-sale-in-anchorage-alaska'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Anchorage, Alaska | Cold-Ready AI Smart Coolers',
  description:
    'Launch Haha smart coolers in Anchorage, Alaska. Serve airports, oil & gas offices, and healthcare campuses with climate-ready vending machines backed by 24/7 support.',
  keywords:
    'Anchorage vending machines for sale, smart vending Anchorage AK, haha smart coolers Anchorage, AI vending Alaska, cold climate vending machines',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title: 'Vending Machines for Sale in Anchorage, Alaska | Cold-Ready AI Smart Coolers',
    description:
      'Deliver cold-weather tested Haha AI smart coolers across Anchorage workplaces and tourism hubs with expert placement guidance and operator-first support.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Anchorage, Alaska | Cold-Ready AI Smart Coolers',
    description:
      'Equip Anchorage with cold-weather smart vending. Haha AI coolers, Amazon availability, and 24/7 Telegram support from The Vending Locator.'
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

export default function AnchorageAlaskaVendingPage() {
  return <AnchoragePage />
}

