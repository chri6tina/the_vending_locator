import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Bristol, Connecticut | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Bristol, Connecticut. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Bristol businesses.',
  keywords: 'haha coolers Bristol, smart vending Bristol Connecticut, grab and go cooler Bristol, cashless vending Bristol',
  openGraph: {
    title: 'Haha Smart Coolers in Bristol, Connecticut',
    description: 'Revolutionary grab & go vending technology for Bristol businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/bristol-connecticut',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/bristol-connecticut',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function BristolConnecticutCoolerPageMetadata() {
  return <PageClient />;
}
