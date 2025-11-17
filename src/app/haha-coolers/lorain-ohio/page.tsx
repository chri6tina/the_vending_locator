import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Lorain, Ohio | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Lorain, Ohio. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Lorain businesses.',
  keywords: 'haha coolers Lorain, smart vending Lorain Ohio, grab and go cooler Lorain, cashless vending Lorain',
  openGraph: {
    title: 'Haha Smart Coolers in Lorain, Ohio',
    description: 'Revolutionary grab & go vending technology for Lorain businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/lorain-ohio',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/lorain-ohio',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function LorainOhioCoolerPageMetadata() {
  return <PageClient />;
}
