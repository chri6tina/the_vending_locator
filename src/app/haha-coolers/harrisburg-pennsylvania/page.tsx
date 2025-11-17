import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Harrisburg, Pennsylvania | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Harrisburg, Pennsylvania. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Harrisburg businesses.',
  keywords: 'haha coolers Harrisburg, smart vending Harrisburg Pennsylvania, grab and go cooler Harrisburg, cashless vending Harrisburg',
  openGraph: {
    title: 'Haha Smart Coolers in Harrisburg, Pennsylvania',
    description: 'Revolutionary grab & go vending technology for Harrisburg businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/harrisburg-pennsylvania',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/harrisburg-pennsylvania',
  },
};

export default function HarrisburgPennsylvaniaCoolerPageMetadata() {
  return <PageClient />;
}
