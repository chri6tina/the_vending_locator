import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Hartford, Connecticut | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Hartford, Connecticut. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Hartford businesses.',
  keywords: 'haha coolers Hartford, smart vending Hartford Connecticut, grab and go cooler Hartford, cashless vending Hartford',
  openGraph: {
    title: 'Haha Smart Coolers in Hartford, Connecticut',
    description: 'Revolutionary grab & go vending technology for Hartford businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/hartford-connecticut',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/hartford-connecticut',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function HartfordConnecticutCoolerPageMetadata() {
  return <PageClient />;
}
