import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Wheatland, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Wheatland, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Wheatland businesses.',
  keywords: 'haha coolers Wheatland, smart vending Wheatland California, grab and go cooler Wheatland, cashless vending Wheatland',
  openGraph: {
    title: 'Haha Smart Coolers in Wheatland, California',
    description: 'Revolutionary grab & go vending technology for Wheatland businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/wheatland-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/wheatland-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function WheatlandCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
