import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Casper, Wyoming | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Casper, Wyoming. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Casper businesses.',
  keywords: 'haha coolers Casper, smart vending Casper Wyoming, grab and go cooler Casper, cashless vending Casper',
  openGraph: {
    title: 'Haha Smart Coolers in Casper, Wyoming',
    description: 'Revolutionary grab & go vending technology for Casper businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/casper-wyoming',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/casper-wyoming',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function CasperWyomingCoolerPageMetadata() {
  return <PageClient />;
}
