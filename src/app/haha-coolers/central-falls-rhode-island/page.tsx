import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Central Falls, Rhode Island | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Central Falls, Rhode Island. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Central Falls businesses.',
  keywords: 'haha coolers Central Falls, smart vending Central Falls Rhode Island, grab and go cooler Central Falls, cashless vending Central Falls',
  openGraph: {
    title: 'Haha Smart Coolers in Central Falls, Rhode Island',
    description: 'Revolutionary grab & go vending technology for Central Falls businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/central-falls-rhode-island',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/central-falls-rhode-island',
  },
};

export default function CentralFallsRhodeIslandCoolerPageMetadata() {
  return <PageClient />;
}
