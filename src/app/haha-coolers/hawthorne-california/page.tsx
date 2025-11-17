import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Hawthorne, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Hawthorne, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Hawthorne businesses.',
  keywords: 'haha coolers Hawthorne, smart vending Hawthorne California, grab and go cooler Hawthorne, cashless vending Hawthorne',
  openGraph: {
    title: 'Haha Smart Coolers in Hawthorne, California',
    description: 'Revolutionary grab & go vending technology for Hawthorne businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/hawthorne-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/hawthorne-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function HawthorneCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
