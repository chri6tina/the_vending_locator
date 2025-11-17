import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Lowell, Massachusetts | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Lowell, Massachusetts. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Lowell businesses.',
  keywords: 'haha coolers Lowell, smart vending Lowell Massachusetts, grab and go cooler Lowell, cashless vending Lowell',
  openGraph: {
    title: 'Haha Smart Coolers in Lowell, Massachusetts',
    description: 'Revolutionary grab & go vending technology for Lowell businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/lowell-massachusetts',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/lowell-massachusetts',
  },
};

export default function LowellMassachusettsCoolerPageMetadata() {
  return <PageClient />;
}
