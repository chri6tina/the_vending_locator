import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Saratoga, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Saratoga, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Saratoga businesses.',
  keywords: 'haha coolers Saratoga, smart vending Saratoga California, grab and go cooler Saratoga, cashless vending Saratoga',
  openGraph: {
    title: 'Haha Smart Coolers in Saratoga, California',
    description: 'Revolutionary grab & go vending technology for Saratoga businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/saratoga-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/saratoga-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function SaratogaCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
