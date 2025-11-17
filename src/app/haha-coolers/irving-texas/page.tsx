import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Irving, Texas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Irving, Texas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Irving businesses.',
  keywords: 'haha coolers Irving, smart vending Irving Texas, grab and go cooler Irving, cashless vending Irving',
  openGraph: {
    title: 'Haha Smart Coolers in Irving, Texas',
    description: 'Revolutionary grab & go vending technology for Irving businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/irving-texas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/irving-texas',
  },
};

export default function IrvingTexasCoolerPageMetadata() {
  return <PageClient />;
}
