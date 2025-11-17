import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Milford, Delaware | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Milford, Delaware. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Milford businesses.',
  keywords: 'haha coolers Milford, smart vending Milford Delaware, grab and go cooler Milford, cashless vending Milford',
  openGraph: {
    title: 'Haha Smart Coolers in Milford, Delaware',
    description: 'Revolutionary grab & go vending technology for Milford businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/milford-delaware',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/milford-delaware',
  },
};

export default function MilfordDelawareCoolerPageMetadata() {
  return <PageClient />;
}
