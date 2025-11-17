import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Richardson, Texas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Richardson, Texas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Richardson businesses.',
  keywords: 'haha coolers Richardson, smart vending Richardson Texas, grab and go cooler Richardson, cashless vending Richardson',
  openGraph: {
    title: 'Haha Smart Coolers in Richardson, Texas',
    description: 'Revolutionary grab & go vending technology for Richardson businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/richardson-texas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/richardson-texas',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function RichardsonTexasCoolerPageMetadata() {
  return <PageClient />;
}
