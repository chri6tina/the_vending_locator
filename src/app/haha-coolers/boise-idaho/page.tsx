import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Boise, Idaho | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Boise, Idaho. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Boise businesses.',
  keywords: 'haha coolers Boise, smart vending Boise Idaho, grab and go cooler Boise, cashless vending Boise',
  openGraph: {
    title: 'Haha Smart Coolers in Boise, Idaho',
    description: 'Revolutionary grab & go vending technology for Boise businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/boise-idaho',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/boise-idaho',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function BoiseIdahoCoolerPageMetadata() {
  return <PageClient />;
}
