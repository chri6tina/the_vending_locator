import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Hawaiian Gardens, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Hawaiian Gardens, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Hawaiian Gardens businesses.',
  keywords: 'haha coolers Hawaiian Gardens, smart vending Hawaiian Gardens California, grab and go cooler Hawaiian Gardens, cashless vending Hawaiian Gardens',
  openGraph: {
    title: 'Haha Smart Coolers in Hawaiian Gardens, California',
    description: 'Revolutionary grab & go vending technology for Hawaiian Gardens businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/hawaiian-gardens-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/hawaiian-gardens-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function HawaiianGardensCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
