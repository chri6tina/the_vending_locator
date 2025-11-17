import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Dupont Circle, Washington DC | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Dupont Circle, Washington DC. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Dupont Circle businesses.',
  keywords: 'haha coolers Dupont Circle, smart vending Dupont Circle Washington DC, grab and go cooler Dupont Circle, cashless vending Dupont Circle',
  openGraph: {
    title: 'Haha Smart Coolers in Dupont Circle, Washington DC',
    description: 'Revolutionary grab & go vending technology for Dupont Circle businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/dupont-circle-washington-dc',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/dupont-circle-washington-dc',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function DupontCircleWashingtonDCCoolerPageMetadata() {
  return <PageClient />;
}
