import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Moorhead, Minnesota | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Moorhead, Minnesota. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Moorhead businesses.',
  keywords: 'haha coolers Moorhead, smart vending Moorhead Minnesota, grab and go cooler Moorhead, cashless vending Moorhead',
  openGraph: {
    title: 'Haha Smart Coolers in Moorhead, Minnesota',
    description: 'Revolutionary grab & go vending technology for Moorhead businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/moorhead-minnesota',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/moorhead-minnesota',
  },
};

export default function MoorheadMinnesotaCoolerPageMetadata() {
  return <PageClient />;
}
