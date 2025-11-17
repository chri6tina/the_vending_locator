import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Biddeford, Maine | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Biddeford, Maine. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Biddeford businesses.',
  keywords: 'haha coolers Biddeford, smart vending Biddeford Maine, grab and go cooler Biddeford, cashless vending Biddeford',
  openGraph: {
    title: 'Haha Smart Coolers in Biddeford, Maine',
    description: 'Revolutionary grab & go vending technology for Biddeford businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/biddeford-maine',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/biddeford-maine',
  },
};

export default function BiddefordMaineCoolerPageMetadata() {
  return <PageClient />;
}
