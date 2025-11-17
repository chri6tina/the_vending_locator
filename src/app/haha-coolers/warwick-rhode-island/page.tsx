import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Warwick, Rhode Island | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Warwick, Rhode Island. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Warwick businesses.',
  keywords: 'haha coolers Warwick, smart vending Warwick Rhode Island, grab and go cooler Warwick, cashless vending Warwick',
  openGraph: {
    title: 'Haha Smart Coolers in Warwick, Rhode Island',
    description: 'Revolutionary grab & go vending technology for Warwick businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/warwick-rhode-island',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/warwick-rhode-island',
  },
};

export default function WarwickRhodeIslandCoolerPageMetadata() {
  return <PageClient />;
}
