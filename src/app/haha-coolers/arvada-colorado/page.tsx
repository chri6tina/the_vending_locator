import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Arvada, Colorado | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Arvada, Colorado. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Arvada businesses.',
  keywords: 'haha coolers Arvada, smart vending Arvada Colorado, grab and go cooler Arvada, cashless vending Arvada',
  openGraph: {
    title: 'Haha Smart Coolers in Arvada, Colorado',
    description: 'Revolutionary grab & go vending technology for Arvada businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/arvada-colorado',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/arvada-colorado',
  },
};

export default function ArvadaColoradoCoolerPageMetadata() {
  return <PageClient />;
}
