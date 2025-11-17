import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Roanoke, Virginia | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Roanoke, Virginia. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Roanoke businesses.',
  keywords: 'haha coolers Roanoke, smart vending Roanoke Virginia, grab and go cooler Roanoke, cashless vending Roanoke',
  openGraph: {
    title: 'Haha Smart Coolers in Roanoke, Virginia',
    description: 'Revolutionary grab & go vending technology for Roanoke businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/roanoke-virginia',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/roanoke-virginia',
  },
};

export default function RoanokeVirginiaCoolerPageMetadata() {
  return <PageClient />;
}
