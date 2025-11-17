import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Grand Rapids, Michigan | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Grand Rapids, Michigan. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Grand Rapids businesses.',
  keywords: 'haha coolers Grand Rapids, smart vending Grand Rapids Michigan, grab and go cooler Grand Rapids, cashless vending Grand Rapids',
  openGraph: {
    title: 'Haha Smart Coolers in Grand Rapids, Michigan',
    description: 'Revolutionary grab & go vending technology for Grand Rapids businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/grand-rapids-michigan',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/grand-rapids-michigan',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function GrandRapidsMichiganCoolerPageMetadata() {
  return <PageClient />;
}
