import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Pawtucket, Rhode Island | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Pawtucket, Rhode Island. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Pawtucket businesses.',
  keywords: 'haha coolers Pawtucket, smart vending Pawtucket Rhode Island, grab and go cooler Pawtucket, cashless vending Pawtucket',
  openGraph: {
    title: 'Haha Smart Coolers in Pawtucket, Rhode Island',
    description: 'Revolutionary grab & go vending technology for Pawtucket businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/pawtucket-rhode-island',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/pawtucket-rhode-island',
  },
};

export default function PawtucketRhodeIslandCoolerPageMetadata() {
  return <PageClient />;
}
