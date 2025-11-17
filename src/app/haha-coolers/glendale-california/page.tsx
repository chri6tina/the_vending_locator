import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Glendale, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Glendale, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Glendale businesses.',
  keywords: 'haha coolers Glendale, smart vending Glendale California, grab and go cooler Glendale, cashless vending Glendale',
  openGraph: {
    title: 'Haha Smart Coolers in Glendale, California',
    description: 'Revolutionary grab & go vending technology for Glendale businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/glendale-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/glendale-california',
  },
};

export default function GlendaleCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
