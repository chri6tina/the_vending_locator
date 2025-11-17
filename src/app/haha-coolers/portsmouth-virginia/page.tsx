import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Portsmouth, Virginia | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Portsmouth, Virginia. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Portsmouth businesses.',
  keywords: 'haha coolers Portsmouth, smart vending Portsmouth Virginia, grab and go cooler Portsmouth, cashless vending Portsmouth',
  openGraph: {
    title: 'Haha Smart Coolers in Portsmouth, Virginia',
    description: 'Revolutionary grab & go vending technology for Portsmouth businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/portsmouth-virginia',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/portsmouth-virginia',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function PortsmouthVirginiaCoolerPageMetadata() {
  return <PageClient />;
}
