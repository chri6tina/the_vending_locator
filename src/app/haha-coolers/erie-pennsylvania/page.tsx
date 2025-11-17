import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Erie, Pennsylvania | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Erie, Pennsylvania. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Erie businesses.',
  keywords: 'haha coolers Erie, smart vending Erie Pennsylvania, grab and go cooler Erie, cashless vending Erie',
  openGraph: {
    title: 'Haha Smart Coolers in Erie, Pennsylvania',
    description: 'Revolutionary grab & go vending technology for Erie businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/erie-pennsylvania',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/erie-pennsylvania',
  },
};

export default function EriePennsylvaniaCoolerPageMetadata() {
  return <PageClient />;
}
