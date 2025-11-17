import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Tiburon, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Tiburon, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Tiburon businesses.',
  keywords: 'haha coolers Tiburon, smart vending Tiburon California, grab and go cooler Tiburon, cashless vending Tiburon',
  openGraph: {
    title: 'Haha Smart Coolers in Tiburon, California',
    description: 'Revolutionary grab & go vending technology for Tiburon businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/tiburon-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/tiburon-california',
  },
};

export default function TiburonCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
