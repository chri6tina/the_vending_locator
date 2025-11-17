import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Appleton, Wisconsin | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Appleton, Wisconsin. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Appleton businesses.',
  keywords: 'haha coolers Appleton, smart vending Appleton Wisconsin, grab and go cooler Appleton, cashless vending Appleton',
  openGraph: {
    title: 'Haha Smart Coolers in Appleton, Wisconsin',
    description: 'Revolutionary grab & go vending technology for Appleton businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/appleton-wisconsin',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/appleton-wisconsin',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function AppletonWisconsinCoolerPageMetadata() {
  return <PageClient />;
}
