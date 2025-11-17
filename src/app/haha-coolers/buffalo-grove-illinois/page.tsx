import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Buffalo Grove, Illinois | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Buffalo Grove, Illinois. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Buffalo Grove businesses.',
  keywords: 'haha coolers Buffalo Grove, smart vending Buffalo Grove Illinois, grab and go cooler Buffalo Grove, cashless vending Buffalo Grove',
  openGraph: {
    title: 'Haha Smart Coolers in Buffalo Grove, Illinois',
    description: 'Revolutionary grab & go vending technology for Buffalo Grove businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/buffalo-grove-illinois',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/buffalo-grove-illinois',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function BuffaloGroveIllinoisCoolerPageMetadata() {
  return <PageClient />;
}
