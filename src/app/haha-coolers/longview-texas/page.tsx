import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Longview, Texas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Longview, Texas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Longview businesses.',
  keywords: 'haha coolers Longview, smart vending Longview Texas, grab and go cooler Longview, cashless vending Longview',
  openGraph: {
    title: 'Haha Smart Coolers in Longview, Texas',
    description: 'Revolutionary grab & go vending technology for Longview businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/longview-texas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/longview-texas',
  },
};

export default function LongviewTexasCoolerPageMetadata() {
  return <PageClient />;
}
