import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Hamilton, Ohio | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Hamilton, Ohio. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Hamilton businesses.',
  keywords: 'haha coolers Hamilton, smart vending Hamilton Ohio, grab and go cooler Hamilton, cashless vending Hamilton',
  openGraph: {
    title: 'Haha Smart Coolers in Hamilton, Ohio',
    description: 'Revolutionary grab & go vending technology for Hamilton businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/hamilton-ohio',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/hamilton-ohio',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function HamiltonOhioCoolerPageMetadata() {
  return <PageClient />;
}
