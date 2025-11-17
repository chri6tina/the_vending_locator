import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Cheyenne, Wyoming | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Cheyenne, Wyoming. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Cheyenne businesses.',
  keywords: 'haha coolers Cheyenne, smart vending Cheyenne Wyoming, grab and go cooler Cheyenne, cashless vending Cheyenne',
  openGraph: {
    title: 'Haha Smart Coolers in Cheyenne, Wyoming',
    description: 'Revolutionary grab & go vending technology for Cheyenne businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/cheyenne-wyoming',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/cheyenne-wyoming',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function CheyenneWyomingCoolerPageMetadata() {
  return <PageClient />;
}
