import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Whittier, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Whittier, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Whittier businesses.',
  keywords: 'haha coolers Whittier, smart vending Whittier California, grab and go cooler Whittier, cashless vending Whittier',
  openGraph: {
    title: 'Haha Smart Coolers in Whittier, California',
    description: 'Revolutionary grab & go vending technology for Whittier businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/whittier-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/whittier-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function WhittierCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
