import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Youngstown, Ohio | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Youngstown, Ohio. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Youngstown businesses.',
  keywords: 'haha coolers Youngstown, smart vending Youngstown Ohio, grab and go cooler Youngstown, cashless vending Youngstown',
  openGraph: {
    title: 'Haha Smart Coolers in Youngstown, Ohio',
    description: 'Revolutionary grab & go vending technology for Youngstown businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/youngstown-ohio',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/youngstown-ohio',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function YoungstownOhioCoolerPageMetadata() {
  return <PageClient />;
}
