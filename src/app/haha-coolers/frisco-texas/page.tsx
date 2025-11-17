import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Frisco, Texas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Frisco, Texas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Frisco businesses.',
  keywords: 'haha coolers Frisco, smart vending Frisco Texas, grab and go cooler Frisco, cashless vending Frisco',
  openGraph: {
    title: 'Haha Smart Coolers in Frisco, Texas',
    description: 'Revolutionary grab & go vending technology for Frisco businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/frisco-texas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/frisco-texas',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function FriscoTexasCoolerPageMetadata() {
  return <PageClient />;
}
